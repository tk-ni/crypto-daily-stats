<script>
import DOMPurify from "dompurify";

export default {
  name: "CryptoInfo",
  props: [
    "image",
    "title",
    "description",
    "current_price",
    "price_change_percentage_24h",
  ],
  data() {
    return {
      sanitizedDescription: DOMPurify.sanitize(this.description),
    };
  },
};
</script>
<template>
  <div class="info-wrapper">
    <img :src="image" />
    <div class="text-wrapper">
      <div class="title-wrapper">
        <p class="title">{{ title }}</p>
        <p class="current_price">${{ current_price }}</p>
        <div class="price-percentage-24h">
          % {{ price_change_percentage_24h }}
        </div>
      </div>
      <p class="description" v-html="sanitizedDescription"></p>
    </div>
  </div>
</template>

<style scoped>
p {
  margin: 0;
}
.info-wrapper {
  display: flex;
}

.info-wrapper img {
  object-fit: contain;
  padding: 10px 20px 10px 10px;
}

.info-wrapper .text-wrapper {
  text-align: left;
}
.info-wrapper .text-wrapper .title-wrapper {
  display: flex;
  align-items: stretch;
  margin-bottom: 10px;
}

.info-wrapper .text-wrapper .title-wrapper .price-percentage-24h {
  background-color: var(--green);
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
}
.info-wrapper .text-wrapper .title-wrapper .title {
  font-size: 3rem;
  font-weight: 700;
  padding-right: 20px;
}

.info-wrapper .text-wrapper .description {
  font-size: 0.9rem;
}
.info-wrapper .text-wrapper .current_price{
  background-color: var(--bg-gray);
  padding:10px;
  border-radius: 5px;
  color: var(--darker-green);
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info-wrapper .text-wrapper .current_price::before{
  content: 'Current Price';
  color: #000;
  font-size: .6rem;
}
</style>