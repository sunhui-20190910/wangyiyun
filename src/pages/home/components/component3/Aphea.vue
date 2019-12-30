<template>
      <ul class="list">
        <li v-for="item in list" class="item"
        :ref="item"
        :key="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleletterClick">{{item}}</li>
      </ul>
</template>

<script>
    export default {
      name: "Aphea",
      props:{
          list: Array
      },
      data:function(){
    return{
      touchStatus:false,
      startY:0,
      timer:null
    }
  },
      updated (){
    this.startY=this.$refs['A'][0].offsetTop
  },
     methods:{
    handleletterClick(e){
      this.$emit('change',e.target.innerText);
    },
    handleTouchStart(){
      this.touchStatus=true;
    },
    handleTouchMove(e){
      if(this.touchStatus){
        if(this.timer){
          clearTimeout(this.timer);
        }
         this.timer=setTimeout(()=>{
              const startY=this.startY;
              const touchY=e.touches[0].clientY-108;
              const index=Math.floor((touchY-startY)/20);
              if(index>=0&&index<this.list.length){
                this.$emit('change',this.list[index])
              }
            },16)
      }
    },
    handleTouchEnd(){
      this.touchStatus=true;
    },
  }

    }
</script>

<style scoped lang="stylus">

 .list
    display flex
    position absolute
    top .88em
    right 0

    width .4rem
    flex-direction column
    justify-content center
    background-color red
    .item
      line-height .44rem
      text-align center
      color $bgcolor


</style>
