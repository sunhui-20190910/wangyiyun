<template>
  <div class="sw">
  <mt-swipe :auto="4000" class="wrapper">
  <mt-swipe-item class="swiper-item">
    <img class="swiper-img" src="http://p1.music.126.net/Vhg2myyZoEHeggF7gir6oA==/109951164565077742.jpg">
  </mt-swipe-item>
  <mt-swipe-item class="swiper-item">
    <img class="swiper-img" src="http://p1.music.126.net/Vhg2myyZoEHeggF7gir6oA==/109951164565077742.jpg">
  </mt-swipe-item>
  <mt-swipe-item class="swiper-item">
    <img class="swiper-img" src="http://p1.music.126.net/Vhg2myyZoEHeggF7gir6oA==/109951164565077742.jpg">
  </mt-swipe-item>
  </mt-swipe>
</div>

</template>

<script>
    export default {
        name: "SwiperPart"
    //      data() {
    //   return {
    //     imglist: [
    //       {
    //         id:'001',
    //         imgurl:"http://p1.music.126.net/Vhg2myyZoEHeggF7gir6oA==/109951164565077742.jpg"
    //       },
    //       {
    //         id:'002',
    //         imgurl:"http://p1.music.126.net/G_BWvm6jI-o4E57ELKo-sg==/109951164565672890.jpg"
    //       },
    //       {
    //         id:'003',
    //         imgurl:"http://p1.music.126.net/Vhg2myyZoEHeggF7gir6oA==/109951164565077742.jpg"
    //       },
    //       {
    //         id:'004',
    //         imgurl:"http://p1.music.126.net/Vhg2myyZoEHeggF7gir6oA==/109951164565077742.jpg"
    //       }
    //     ]
    //   }
    // },
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
