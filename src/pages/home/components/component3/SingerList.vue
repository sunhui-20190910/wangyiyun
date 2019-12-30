<template>
  <div class="singer" ref="wrapper">
    <ul class="singerul">
      <div class="singerli border-bottom border-top" v-for="(value, key) in list" :key="key"  :ref="key">
        <h2 style="padding-left: .2rem" >{{key}}</h2>
        <ul class="item-ul">
          <li class="item-li border-bottom"  v-for="(item,index) in value" :key="item.id">
            <img class="item-img" :src="item.picUrl"/>
            <span class="item-con">{{item.name}} </span>
          </li>
        </ul>
      </div>
    </ul>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'

    export default {
      name: "SingerList",
      props: {
        list: Object,
        letter:String
    },
      mounted () {
       this.scroll=new BScroll(this.$refs.wrapper)
    },
      watch:{
    letter (){
      console.log("le"+this.letter);
      const element=this.$refs[this.letter][0];
      console.log(element);
      this.scroll.scrollToElement(element);//滚动到指定位置

    }
  },

    }

</script>

<style scoped lang="stylus">
  .singer
    width 100%
    .singerul
      width 100%
      .singerli
        background-color gainsboro
        color white
        line-height .4rem
        .item-ul
          width 100%
          background-color white
          .item-li
            width 100%
            height 0
            overflow hidden
            padding-bottom 16.4%
            background-color ghostwhite
            box-sizing border-box
            position flex
            padding-left .1rem
            .item-img
              padding-top .1rem
              width 13.8%
            .item-con
              padding-top .1rem
              padding-left .3rem
              line-height 99%
              font-size .29rem
              color black
              box-sizing border-box





</style>
