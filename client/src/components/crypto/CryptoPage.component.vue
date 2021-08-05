<script>
export default {
  name: "CryptoPage",
  data() {
    return {
      cryptoId: this.$route.params.id,
    };
  },
  methods: {
    init() {},
  },
  mounted() {
    this.init();
  },
};
</script>
<template>
  <div>CryptoPage</div>
</template>

<style scoped>
</style>