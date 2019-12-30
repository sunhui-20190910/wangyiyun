<template>
    <div class="header">
      <div class="header-left"><span class="iconfont lefticon">&#xe63d;</span></div>
      <div class="header-title">VMUSICJIN</div>
      <div class="header-right"><span class="iconfont righticon">&#xe60c;</span></div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style lang="stylus"scoped>
  @import '~styles/varibles.styl'
  .header
    height .88rem
    line-height .88rem
    width 100%
    background-color $bgcolor
    display flex
    text-align center
    .header-left
      width .88rem
      .lefticon
        color white
        font-size .35rem
    .header-title
      width 5.74rem
      text-align center
      color white
      font-size .35rem
      font-weight 10
    .header-right
      width .88rem
      .righticon
        color white
        font-size .35rem


</style>
