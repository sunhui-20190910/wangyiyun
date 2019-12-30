<template>
  <div class="part">
    <singer-list :list="artlists"  :letter="letter" class="singer"></singer-list>
    <aphea :list="FristPins" @change="handlerletter" class="pinyin"></aphea>
  </div>
</template>

<script>
  import SingerList from './component3/SingerList'
  import Aphea from './component3/Aphea'
  import  axios from 'axios'


    export default {
        name: "PartSinger",
      components:{
          SingerList,
          Aphea
      },
      data() {
      return {
            FristPins: ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"],
            artlists: {},
            letter:''
      }
    },
      methods : {
        getHomeInfo() {
          axios.get('../../../../../static/singer.json')
            .then(this.getHomeInfoSucc)
            .catch(function (err) {
              console.log(err)
            })
        },
        getHomeInfoSucc(res) {
          let pinyin = require('js-pinyin');
          pinyin.setOptions({checkPolyphone: false, charCase: 0});
          res = res.data;
          if (res.code === 200) {
            let cityArr = [];
            for (let i = 0; i < res.artists.length; i++) {
              let sName = res.artists[i].name;
              let fristName = pinyin.getCamelChars(sName).substring(0, 1);    //这里截取首字母的第一
              res.artists[i].first = fristName;
              cityArr.push(res.artists[i]);
            }
            console.log("-------ca")
            console.log(cityArr);
            let cityJson = {};
            console.log("----------2");
            console.log(this.FristPins[2]);
            //根据首字母键值对给原数据按首字母分类
            for (let i = 0; i < this.FristPins.length; i++) {//这里的FirstPin是一个写入了所有字母的数组,见data中
              if (!cityJson[this.FristPins[i]]) {
                cityJson[this.FristPins[i]] = []
              }
              cityArr.forEach((item, index) => {
                if (item.first == this.FristPins[i]) {
                  cityJson[this.FristPins[i]].push(item)
                }
              })
            }
              console.log(cityJson);
              this.artlists = cityJson;
              console.log("----------4")
              console.log(this.artlists);
            }
          },
        handlerletter (data){
        console.log("letter:"+data);
        this.letter=data
      }
        },
      mounted() {
          this.getHomeInfo()
      }
    }
</script>

<style scoped lang="stylus">
  .part
      display block

</style>
