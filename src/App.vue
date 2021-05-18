<template>
  <div id="app">
    <Music  v-if="step !== 0" />
    <Screen v-if="step === 0" @onChange="onChange"/>
    <Loading v-if="step === 1" />
    <Heart v-if="step === 2" />
    <Carousel v-if="step === 3"/>
    <Lottery v-if="step === 4"/>
    <router-view/>
  </div>
</template>

<script>
import Music from "./components/music.vue"
import Heart from "./views/heart.vue"
import Screen from "./views/screen.vue"
import Photo1 from "./views/photo1.vue"
import Photo2 from "./views/photo2.vue"
import Loading from "./views/loading.vue"
import Carousel from "./views/carousel.vue"
import Lottery from "./views/lottery.vue"

export default {
  name: 'App',
  components : {Music,Heart,Screen,Photo1,Photo2,Loading,Carousel,Lottery},
  data(){return{
    step : 0
  }},
  mounted(){
      let startY = 0;
      let endY = 0;
      window.addEventListener('touchstart',(event)=>{
      var touch = event.targetTouches[0];
      //滑动起点的坐标
      startY = touch.pageY;
      // console.log(“startX:”+startX+","+“startY:”+startY);
      });
      window.addEventListener('touchmove',(event)=>{
      var touch = event.targetTouches[0];
      //手势滑动时，手势坐标不断变化，取最后一点的坐标为最终的终点坐标
      endY = touch.pageY;
      // console.log(“endX:”+endX+","+“endY:”+endY);
      })
      window.addEventListener('touchend',(event)=>{
      var distanceY=endY - startY;
      // console.log(“distanceX:”+distanceX+","+“distanceY:”+distanceY);
      //移动端设备的屏幕宽度
      var clientHeight =document.documentElement.clientHeight;
      // console.log(clientHeight;0.2);
      //判断是否滑动了，而不是屏幕上单击了
      if(startY!=Math.abs(distanceY)){
      //在滑动的距离超过屏幕高度的20%时，做某种操作
      if(Math.abs(distanceY)>clientHeight*0.2){
        //往上 2  往下 1
        distanceY <0 ? this.change2():this.change1();
        }
      };
      startY =endY =0;
    })
  },
  methods:{
    onChange(){
      this.step = this.step + 1;
    },
    // 减
    change1(){
      if(this.step !== 0){
        let s = this.step - 1;
        s = s <= 0 ? 0 : s;
        this.step = s;
      }
    },
    // 加
    change2(){
      if(this.step !== 0){
        this.step = this.step + 1;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
</style>
