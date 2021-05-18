<template>
  <div class="wrapper">
    <div class="box item-1"  @click="unLock">
      <div :class="['overlay','ovrl-left','ovrl-1', index === 0 && 'move-right']">开&nbsp;&nbsp;启</div>
      <div :class="['overlay','ovrl-right','ovrl-1', index === 0 && 'move-left']">520</div>
      <div :class="['locker' , index === 0 && 'unlock']"><i class="arrow fa fa-arrows-h" aria-hidden="true"></i></div>
    </div>

  </div>
</template>

<script>
export default {
    data(){return{
        openArr : [],
        index : -1
    }},
    setup() {
        
    },
    methods : {
        unLock(){
            this.index = 0 ;
            setTimeout(() => {
            this.$emit('onChange')
            }, 1200);
        }   
    }
}
</script>


<style scoped>
body {
  background: #3494E6; /* fallback for old browsers */ /* Chrome 10-25, Safari 5.1-6 */
  /* background: -webkit-gradient(
    linear,
    left top, right top,
    from(#EC6EAD),
    to(#3494E6)
  ); */
  background: linear-gradient(
    to right,
    #EC6EAD,
    #3494E6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  text-align: center;
  color: #fff;
}

a {
  color: #ccc;
  text-decoration: none;
}

h1 {
  font-family: 'Courgette', cursive;
  color: #0D5212;
}

.wrapper {
    width: 100%;
    height: 100%;
}

.box {

    width: 100%;
    height: 100%;
    position: relative;
}
img {
  width: 280px;
  height: 200px;
  -webkit-box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.75);
}

.overlay {
  position: absolute;
  margin: 0;
  top: 0;
  height: 200px;
  z-index: 98;
  background: #f7b7bb;
  line-height: 200px;
  color: white;
  font-size: 25px;
  text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
}

.ovrl-left {
    width: 100%;
    height: 50%;
    top: 0;
    left: 0;
  box-shadow: 19px 0px 9px 0px rgba(105, 109, 122, 0.5);
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.8);
}

.ovrl-right {
    width: 100%;
    height: 50%;
    top: 50%;
    left: 0;
  box-shadow: -9px 0px 19px 0px rgba(105, 109, 122, 0.5);
}

.locker {
  position: absolute;
  height: 20px;
  width: 20px;
  background: #fff;
  top: 50%;
  left: 50%;
  margin-top: -10px;
  margin-left: -10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  z-index: 99;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.unlock{
    opacity: 0;
}

i.arrow {
  font-size: 0.8em;
  color: #bcbcbc;
}

.move-right {
  -webkit-animation-name: myRight;
          animation-name: myRight;
  -webkit-animation-duration: 0.5s;
          animation-duration: 0.5s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

.move-left {
  -webkit-animation-name: myLeft;
          animation-name: myLeft;
  -webkit-animation-duration: 1.3s;
          animation-duration: 1.3s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

@keyframes myRight {
  0% {
    top: 0%;
    opacity: 1;
  }
  100% {
    top: -50%;
    opacity: 0;
    display: none;
  }
}


@keyframes myLeft {
  0% {
    top: 50%;
    opacity: 1;
  }
  100% {
    top: 80%;
    opacity: 0;
    display: none;
  }
}
</style>