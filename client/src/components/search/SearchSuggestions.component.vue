<script>
export default {
  name: "SearchSuggestions",
  props: ["suggestions", "isSuggestionsVisible"],
  methods: {
    handleSuggestionClick(suggestion) {
      this.searchText = suggestion.name;
      this.emitChangeSearchText(suggestion.name);
      this.emitHideSuggestionsEvent();
      this.$router.push({ name: "CryptoPage", params: { id: suggestion.id } });
    },
    emitChangeSearchText(text){
        this.$emit('change-search-text', text)
    },
    emitHideSuggestionsEvent(){
        this.$emit('hide-suggestions');
    }
  },
};
</script>

<template>
  <ul v-if="suggestions.length > 0 && isSuggestionsVisible">
    <li v-for="s in suggestions" :key="s.id" @click="handleSuggestionClick(s)">
      {{ s.name }}
    </li>
  </ul>
</template>

<style scoped>


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