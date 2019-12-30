<template>
  <div class="index">
  <mt-navbar  v-model="selected" class="navbar border-bottom">
  <mt-tab-item id="1">推荐</mt-tab-item>
  <mt-tab-item id="2">排行</mt-tab-item>
  <mt-tab-item id="3">歌手</mt-tab-item>
   </mt-navbar>
  <!-- tab-container -->
  <mt-tab-container  v-model="selected">
    <mt-tab-container-item  id="1">
      <part-home></part-home>
    </mt-tab-container-item>
    <mt-tab-container-item id="2">
    <part-recommend></part-recommend>
    </mt-tab-container-item>
    <mt-tab-container-item id="3">
    <part-singer></part-singer>
    </mt-tab-container-item>
  </mt-tab-container>
  </div>

</template>

<script>
  import PartHome from './PartHome'
  import PartRecommend from './PartRecommend'
  import PartSinger from './PartSinger'
    export default {
        name: "HomeIndex",
      components:{
         PartHome,
        PartRecommend,
        PartSinger
      },
      data:function () {
        return{
          selected:'1'
        }
      }
    }
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .index>>>.mint-navbar,.mint-tab-item ,.is-selected
    background-color $bgcolor
    color white
  .index>>>.is-selected
    color white
    border-bottom 2px solid white
    margin-bottom 0rem
  .navbar
    height .88rem


</style>
