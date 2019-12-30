<template>
    <div class="recommend">
      <h1 class="recommend-title">推荐歌曲</h1>
      <ul class="recommend-list">
        <li class="item" v-for="item of list" :key="item.id">
          <div class="item-img"><img class="img" :src="item.imgurl"/></div>
          <div class="item-con">{{item.con}}</div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "SingPart",
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
    padding-bottom 185.88%
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
