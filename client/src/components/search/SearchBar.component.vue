<script>
import { getAllCoins } from "@/services/coingecko.service";
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
    handleSearchClick() {},
    handleSuggestionClick(suggestion) {
      this.searchText = suggestion.name;
      this.hideSuggestions();
      this.$router.push({ name: "CryptoPage", params: { id: suggestion.id } });
    },
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
    <ul v-if="suggestions.length > 0 && isSuggestionsVisible">
      <li
        v-for="s in suggestions"
        :key="s.id"
        @click="handleSuggestionClick(s)"
      >
        {{ s.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.wrapper {
  width: 60%;
  max-width: 800px;
  margin: 0 auto;
}
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

ul {
  width: 100%;
  text-align: center;
  margin: 0 auto;
  max-height: 600px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
li {
  width: 100%;
  list-style: none;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

li:hover {
  background-color: #ececec;
}
.input-with-suggestions {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>