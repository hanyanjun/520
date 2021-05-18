<template>
  <div class="wrapper">
    <div class="box item-1" v-for="(item,index) in imgs"  :key="index" @click="unLock(index)"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/740816/img1.jpg" alt="">
      <div :class="['overlay','ovrl-left','ovrl-1', openArr.includes(index) && 'move-right']">盒</div>
      <div :class="['overlay','ovrl-right','ovrl-1', openArr.includes(index) && 'move-left']">盲</div>
      <div :class="['locker' , openArr.includes(index) && 'unlock']"><i class="arrow fa fa-arrows-h" aria-hidden="true"></i></div>
    </div>

  </div>
</template>

<script>
export default {
    data(){return{
        openArr : [],
        imgs : [
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/740816/img1.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/740816/img1.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/740816/img1.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/740816/img1.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/740816/img1.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/740816/img1.jpg',
]
    }},
    setup() {
        
    },
    methods : {
        unLock(index){
            this.openArr.push(index)
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  max-width: 90%;
  margin: 20px auto 0;
}

.box {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 25%;
          flex: 1 1 25%;
margin-bottom: 20px;
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
  background: rgba(13, 82, 137, 1);
  line-height: 200px;
  color: white;
  font-size: 15px;
  text-align: center;
}

.ovrl-left {
  width: 160px;
  left: 50%;
  -webkit-box-shadow: 9px 0px 19px 0px rgba(105, 109, 122, 1);
  box-shadow: 9px 0px 19px 0px rgba(105, 109, 122, 1);
  border-left: 0.5px solid rgba(255, 255, 255, 0.8);
}

.ovrl-right {
  width: 160px;
  right: 50%;
  -webkit-box-shadow: -9px 0px 19px 0px rgba(105, 109, 122, 1);
  box-shadow: -9px 0px 19px 0px rgba(105, 109, 122, 1);
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

@-webkit-keyframes myRight {
  0% {
    left: 50%;
    opacity: 1;
  }
  100% {
    left: 80%;
    opacity: 0;
    display: none;
  }
}

@keyframes myRight {
  0% {
    left: 50%;
    opacity: 1;
  }
  100% {
    left: 80%;
    opacity: 0;
    display: none;
  }
}

@-webkit-keyframes myLeft {
  0% {
    right: 50%;
    opacity: 1;
  }
  100% {
    right: 80%;
    opacity: 0;
    display: none;
  }
}

@keyframes myLeft {
  0% {
    right: 50%;
    opacity: 1;
  }
  100% {
    right: 80%;
    opacity: 0;
    display: none;
  }
}
</style>