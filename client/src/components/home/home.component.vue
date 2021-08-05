<script>
import SearchBar from "@/components/home/search/SearchBar.component.vue";
export default {
  name: "Home",
  components: {
    SearchBar,
  },
};
</script>

<template>
  <div>
    <header>Crypto Daily Stats <img src="@/assets/logo.png" /></header>
    <SearchBar />
  </div>
</template>

<style scoped>

</style>