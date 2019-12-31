<template>
  <div class="sw">
  <mt-swipe :auto="4000" class="wrapper">
  <mt-swipe-item class="swiper-item" v-for="(item,index) in list " :key="index">
    <img class="swiper-img"  :src=item.picUrl>
  </mt-swipe-item>
  </mt-swipe>
</div>

</template>

<script>
    export default {
        name: "SwiperPart",
        props:{
            list : Array
         },
        mounted() {
          console.log("------------5");
          console.log(this.list);
      }

    }
</script>

<style scoped lang="stylus">
    .sw >>>.mint-swipe-items-wrap
       height 2.8rem
    .wrapper
        overflow:hidden
        width 100%
        height:0
        padding-bottom:37.333333%
        .swiper-item
            width 100%
            height 100%
           .swiper-img
              width 100%
</style>
