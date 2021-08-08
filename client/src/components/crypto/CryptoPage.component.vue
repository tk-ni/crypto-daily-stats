<script>
import { getCoinById } from "@/services/coingecko.service";
import CryptoInfo from "@/components/crypto/CryptoInfo.component.vue";

export default {
  name: "CryptoPage",
  components: {
    CryptoInfo,
  },
  data() {
    return {
      cryptoId: this.$route.params.id,
      coin: null,
    };
  },
  methods: {
    async init() {
      let coin = await getCoinById(this.cryptoId);
      this.coin = coin;
      console.log(this.coin);
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<template>
  <div class="wrapper coin-wrapper" v-if="coin">
    <CryptoInfo
      :image="coin.image"
      :title="coin.name"
      :description="coin.description"
      :current_price="coin.current_price"
      :price_change_percentage_24h="coin.price_change_percentage_24h"
    />
    <div class="rank-wrapper">
      <div class="upvotes">{{ coin.upvotes_24h }}</div>
      <div class="downvotes">{{ coin.downvotes_24h }}</div>
    </div>
    <div class="category-wrapper">
      <p>Categories</p>
      <div class="category" v-for="cat in coin.categories" :key="cat">
        {{ cat }}
      </div>
    </div>
    <div class="platform-wrapper">
      <p>Platforms</p>

      <div
        class="platform"
        v-for="plat in Object.keys(coin.platforms)"
        :key="plat"
      >
        {{ plat }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.coin-wrapper {
  margin: 0 auto;
  padding-top: 20px;
}

.category-wrapper,
.platform-wrapper {
  display: flex;
  align-items: stretch;
  background-color: var(--bg-gray);
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.category-wrapper .category,
.platform-wrapper .platform {
  font-size: 0.8rem;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  margin-right: 5px;
  display: flex;
  align-items: center;
}

.category-wrapper p,
.platform-wrapper p {
  font-weight: 700;
  font-size: 0.9rem;
  padding-right: 10px;
}
</style>