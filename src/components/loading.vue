<template>
<div class="wrap">
    <div class="container">
      <div class="preloader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    <div class="shadow">
    </div>
</div>
        <p class="loading-text">Loading... 
            <template v-if="rate">
                {{rate}}%
            </template>
        </p>
</div>
</template>


<script>
export default {
    data(){return{
        rate : 0
    }},
    setup() {
        
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
.wrap{
    position: relative;
    width: 100%;
    height: 100%;
    background: #d596f0;
}
.container{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.container .preloader{
  animation: rotate 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
}
@keyframes rotate {
  50%{
    transform: rotate(360deg);
  }
  100%{
    transform: rotate(720deg);
  }
}
.preloader span{
  position: absolute;
  display: block;
  height: 64px;
  width: 64px;
  background: #f7b7bb;
  border: 1px solid #f7b7bb;
  border-radius: 100%;
}
.preloader span:nth-child(1){
  transform: translate(-28px, -28px);
  animation: shape_1 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
}
@keyframes shape_1 {
  60%{
    transform: scale(0.4);
  }
}
.preloader span:nth-child(2){
  transform: translate(28px, -28px);
  animation: shape_2 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
}
@keyframes shape_2 {
  40%{
    transform: scale(0.4);
  }
}
.preloader span:nth-child(3){
  position: relative;
  border-radius: 0px;
  transform: scale(0.98) rotate(-45deg);
  animation: shape_3 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
}
@keyframes shape_3 {
  50%{
    border-radius: 100%;
    transform: scale(0.5) rotate(-45deg);
  }
  100%{
    transform: scale(0.98) rotate(-45deg);
  }
}
.shadow{
  position: relative;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  height: 16px;
  width: 64px;
  border-radius: 50%;
  background-color: #d9d9d9;
  border: 1px solid #d9d9d9;
  animation: shadow 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
}
@keyframes shadow {
  50%{
    transform: translateX(-50%) scale(0.5);
    border-color: #f2f2f2;
  }
}
.loading-text {
	margin-top: 100px;
	text-transform: uppercase;
	letter-spacing: 2px;
	color: #fff;
    position: absolute;
    bottom: 38%;
    left: 50%;
    margin-left: -50px;
}

</style>