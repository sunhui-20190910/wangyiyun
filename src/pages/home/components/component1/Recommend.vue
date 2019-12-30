<template>
    <div class="recommend">
      <h1 class="recommend-title">推荐歌单</h1>
      <ul class="recommend-list">
        <li class="item" v-for="item of list" :key="item.id">
          <div class="item-img"><img class="img" :src="item.imgurl"/></div>
          <p class="item-logo"><span class="iconfont lis ">&#xe64c;</span>{{item.num}}</p>
          <div class="item-con">{{item.con}}</div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "RecommendPart",
        props:{
            list : Array
         },
      mounted() {
          console.log("------------3");
          console.log(this.list);
      }
    }
</script>

<style scoped lang="stylus">
  .recommend-title
    overflow hidden
    width 100%
    height 0
    padding-bottom 17.33333%
    color black
    background-color white
    font-size .35rem
    line-height 1.3rem
    padding-left .1rem
    font-weight bolder
  .recommend-list
    overflow hidden
    width 100%
    height 0
    padding-bottom 467.5%
    /*background-color gray*/
    .item
      width 33.3333333%
      height 0
      padding-bottom 46.933333%
      float left

      position relative
      .item-img
        overflow hidden
        position absolute
        top 0
        left .1rem
        right .1rem
        bottom .8rem
        box-sizing border-box
        .img
          display block
          width 100%
          height 100%
      .item-logo
          position absolute
          right .1rem
          top .12rem
          box-sizing border-box
          color white
          .lis
            font-size .28rem
            padding-right .1rem
      .item-con
          position absolute
          bottom 0
          left 0
          padding-bottom: .2rem
          padding-left  .1rem
          box-sizing border-box
          color black
          font-size .25rem









</style>
