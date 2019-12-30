<template>
  <div>
  <home-header></home-header>
    <home-index></home-index>
  </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader'
  import HomeIndex from './components/Index'
  // import PartHome from './components/PartHome'
    export default {
        name: "Home",
      components:{
         HomeHeader,
        HomeIndex
      }
    }
</script>

<style scoped>

</style>
