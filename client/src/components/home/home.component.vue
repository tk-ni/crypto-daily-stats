<template>
    <header>Crypto Daily Stats <img src="@/assets/logo.png" /></header>
    <SearchBar/>
</template>

<script>
import SearchBar from '@/components/home/search/SearchBar.component.vue';
export default{
    name: 'Home',
    components: {
        SearchBar
    }
}
</script>


<style scoped>

</style>