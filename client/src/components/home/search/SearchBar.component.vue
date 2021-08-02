<script>
import { getAllCoins } from "@/services/coingecko.service";
export default {
  name: "SearchBar",
  data() {
    return {
      coins: [],
    };
  },
  methods: {
    init: async () => {
      let coins = await getAllCoins();
      if (coins) {
        this.coins = [...coins];
      } else {
        this.coins = false;
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<template>
  <div>Search Bar</div>
  <!-- <div v-if="this.coins">GOTEM COINS</div>
  <div v-else>NO COINS OH NO</div> -->
</template>

<style scoped>
</style>