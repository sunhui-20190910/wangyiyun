<template>
  <div class="partone">
    <!--<home-header></home-header>-->
    <!--<home-index></home-index>-->
    <swiper-part></swiper-part>
    <recommend-part :list="recommendlist"></recommend-part>
    <sing-part :list="singlist"></sing-part>
  </div>

</template>

<script>
  import SwiperPart from './component1/SwiperPart'
  import RecommendPart from './component1/Recommend'
  import SingPart from './component1/RecommendSing'
  // import HomeHeader from './HomeHeader'
  // import HomeIndex from './Index'
  import axios from 'axios'
    export default {
        name: "PartHome",
       components:{
          SwiperPart,
          RecommendPart,
          SingPart
      },
      data:function () {
        return {
          recommendlist:[],
          singlist:[]
        }
      },
      methods :{
      getHomeInfo(){
        axios.get('../../../../../static/recommendlist.json')
             .then(this.getHomeInfoSucc)
             .catch(function (err) {
               console.log(err)
             })
            },
            getHomeInfoSucc(res){
              res=res.data;
              if(res.ret&&res.data){
                const data=res.data;
                this.recommendlist=data.recommendlist;
                this.singlist=data.singlist;
              }

            }
    },
      mounted() {
          this.getHomeInfo()
      }
    }
</script>

<style scoped lang="stylus">

</style>
