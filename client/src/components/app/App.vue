<script>
import SearchBar from '@/components/search/SearchBar.component.vue';

export default {
  name: "App",
  components: {
    SearchBar
  }
};
</script>

<template>
  <div>
    <header>Crypto Daily Stats <img src="@/assets/logo.png" /></header>
    <SearchBar />
    <router-view :key="this.$route.fullPath"/>
  </div>
</template>

<style>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
:root{
  --green: rgb(112, 216, 15);
  --darker-green: rgb(99, 206, 0);
  --bg-gray: #f8f8f8;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.vue-logo {
  width: 50px;
}
.wrapper {
  width: 60%;
  max-width: 800px;
  margin: 0 auto;
}


</style>