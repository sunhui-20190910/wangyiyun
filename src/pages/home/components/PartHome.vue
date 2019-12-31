<template>
  <div class="partone">
    <!--<home-header></home-header>-->
    <!--<home-index></home-index>-->
    <swiper-part :list="bannerlist"></swiper-part>
    <recommend-part :list="recommendlist"></recommend-part>
    <sing-part :list="singlist"></sing-part>
  </div>

</template>

<script>
  import SwiperPart from './component1/SwiperPart'
  import RecommendPart from './component1/Recommend'
  import SingPart from './component1/RecommendSing'

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
          singlist:[],
          bannerlist:[]
        }
      },
      methods :{
      getBannerInfo(){
        axios.get('../../../../../static/banner.json')
             .then(this.getBannerInfoSucc)
             .catch(function (err) {
               console.log(err)
             })
            },
      getBannerInfoSucc(res){
              var res=res.data;
              if(res.code==200&&res){
               this.bannerlist=res.banners;
               console.log("bannerlist");
               console.log(this.bannerlist);
              }

            },
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
          this.getBannerInfo();
          this.getHomeInfo();

      }
    }
</script>

<style scoped lang="stylus">

</style>
