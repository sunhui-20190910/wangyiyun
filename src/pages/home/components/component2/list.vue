<template>
    <ul class="list">
        <li class="item border-bottom" v-for="i in 7" :key="i">
            <div class="item-img"><img class="img" src="http://p2.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg" /></div>
            <ul class="item-ul">
            <li class="item-li">1.句号-G.E.M邓紫棋</li>
            <li class="item-li">2.麻雀-李荣浩</li>
            <li class="item-li">3.下山-要不要买菜</li>
           </ul>
        </li>

    </ul>
</template>

<script>
    export default {
        name: "ListPart"
    }
</script>

<style scoped lang="stylus">
  .list
    width 100%
    height 0
    padding-bottom 208.26667%
    overflow hidden
    background-color #eaeaea
    .item
      width 100%
      height 0
      padding-bottom 30.1408%
      overflow hidden
      display flex
      position relative
      .item-img
         position absolute
         left .07rem
         top .2rem
         width 26.6667%
         height 0
         padding-bottom 26.6667%
         overflow hidden
        .img
          width 100%
      .item-ul
         position absolute
         top .4rem
         left 2.2rem
         height 90%
         line-height 90%
         .item-li
            padding .15rem











</style>
