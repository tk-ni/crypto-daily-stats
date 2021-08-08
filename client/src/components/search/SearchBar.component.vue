<script>
import { getAllCoins } from "@/services/coingecko.service";
import SearchSuggestions from "@/components/search/SearchSuggestions.component.vue";

export default {
  name: "SearchBar",
  data() {
    return {
      coins: [],
      suggestions: [],
      isSuggestionsVisible: true,
      searchText: "",
      loading: true,
    };
  },
  components: {
    SearchSuggestions,
  },
  methods: {
    async init() {
      let coins = await getAllCoins();
      if (coins.length > 0) {
        this.coins = [...coins];
        this.loading = false;
      } else {
        this.coins = false;
        this.loading = false;
      }
    },
    handleSearchChange() {
      this.suggestions = this.coins.filter((c) => {
        let name = c.name.toLowerCase();
        if (name.startsWith(this.searchText.toLowerCase())) {
          return c;
        }
        return false;
      });
      if (this.searchText == "") {
        this.suggestions = [];
      }
    },
    hideSuggestions() {
      this.isSuggestionsVisible = false;
    },
    showSuggestions() {
      this.isSuggestionsVisible = true;
    },
    handleChangeSearchTextEvent(t) {
      this.searchText=t;
    },
    handleHideSuggestionsEvent() {
      this.isSuggestionsVisible = false;
    },
    handleSearchClick() {},
  },
  mounted() {
    this.init();
  },
};
</script>

<template>
  <div class="wrapper" v-if="!loading">
    <input
      v-bind:class="[
        suggestions.length > 0 && isSuggestionsVisible
          ? 'input-with-suggestions'
          : '',
      ]"
      @input="handleSearchChange(e)"
      tabindex="0"
      @focus="showSuggestions()"
      v-model="searchText"
      placeholder="Search Coins..."
    />
    <SearchSuggestions
      @hide-suggestions="handleHideSuggestionsEvent"
      @change-search-text="handleChangeSearchTextEvent"
      :suggestions="suggestions"
      :isSuggestionsVisible="isSuggestionsVisible"
    />
  </div>
</template>

<style scoped>

input:focus {
  outline: none;
}
input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
}
</style>