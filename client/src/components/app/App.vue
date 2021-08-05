<script>
import Home from "@/components/home/home.component.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<template>
  <Home />
</template>

<style>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
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
</style>