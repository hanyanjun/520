<template>
<ul class="grid">

  <li><img src='../assets/1.jpg' alt="图片" /></li>
  <li><img src='../assets/2.jpg' alt="图片" /></li>
  <li><img src='../assets/3.jpg' alt="图片" /></li>
  <li><img src='../assets/4.jpg' alt="图片" /></li>
  <li><img src='../assets/5.jpg' alt="图片" /></li>
  <li><img src='../assets/6.jpg' alt="图片" /></li>
  <li><img src='../assets/7.jpg' alt="图片" /></li>
  <li><img src='../assets/8.jpg' alt="图片" /></li>
  <li><img src='../assets/9.jpg' alt="图片" /></li>
  <li><img src='../assets/10.jpg' alt="图片" /></li>
  <li><img src='../assets/11.jpg' alt="图片" /></li>
  <li><img src='../assets/12.jpg' alt="图片" /></li>
  <li><img src='../assets/13.jpg' alt="图片" /></li>
  <li><img src='../assets/14.jpg' alt="图片" /></li>
  <li><img src='../assets/15.jpg' alt="图片" /></li>
  <li><img src='../assets/16.jpg' alt="图片" /></li>
  <li><img src='../assets/17.jpg' alt="图片" /></li>
  <li><img src='../assets/1.jpg' alt="图片" /></li>
  <li><img src='../assets/2.jpg' alt="图片" /></li>
  <li><img src='../assets/3.jpg' alt="图片" /></li>
  <li><img src='../assets/4.jpg' alt="图片" /></li>
  <li><img src='../assets/5.jpg' alt="图片" /></li>
  <li><img src='../assets/6.jpg' alt="图片" /></li>
  <li><img src='../assets/7.jpg' alt="图片" /></li>
  <li><img src='../assets/8.jpg' alt="图片" /></li>
  <li><img src='../assets/9.jpg' alt="图片" /></li>
  <li><img src='../assets/10.jpg' alt="图片" /></li>
  <li><img src='../assets/11.jpg' alt="图片" /></li>
  <li><img src='../assets/12.jpg' alt="图片" /></li>
  <li><img src='../assets/13.jpg' alt="图片" /></li>
  <li><img src='../assets/14.jpg' alt="图片" /></li>
  <li><img src='../assets/15.jpg' alt="图片" /></li>
  <li><img src='../assets/16.jpg' alt="图片" /></li>
  <li><img src='../assets/17.jpg' alt="图片" /></li>
  <li><img src='https://images.unsplash.com/photo-1514911278673-b33f6439fad3?auto=format&fit=crop&w=250&h=250&q=80' alt="图片" /></li>
</ul>
</template>


<style scoped>
img {
    width: 75px;
  transform: scaleY(1.1547);
  object-fit: contain;
  height: 75px;
}

.grid{
  padding-top: 50px;
  display:grid;
  background: #303633 ;
  min-height: 100vh;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(60px,1fr) minmax(60px,1fr)) minmax(60px,1fr);
  overflow: hidden;
}

.grid > li{
  margin: 36% 0 36% 0;
  
}
.grid > li:nth-child(2n+1){
  transform: skewY(30deg);
}
.grid > li:nth-child(2n){
  transform: skewY(-30deg);
}

.grid > li:before {
  display: block;
  position: absolute;
  top: -7.7%;
  left: 0;
  width: 100%;
  height: 114%;
  content: '';
}
.grid > li::after {
  display: block;
  position: absolute;
  top: -7.7%;
  left: 0;
  width: 100%;
  height: 114%;
  content: '';
}
 /* Add gradient on top of image to give "shadow" in corner */
.grid > li:nth-child(2n)::after {
  background-image: linear-gradient(135deg, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6));
}
.grid > li:nth-child(2n+1)::after {
  background-image: linear-gradient(225deg, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 50%,  rgba(0, 0, 0, 0.6) 100%);
}

 /* Add coloured gradient to "top" of each cube */
/* Colour 1 */
.grid > li:nth-child(6n)::before {
  background-image: linear-gradient(-45deg, #85A08B, #B1D6B9);
  transform-origin: 0 0;
  transform: skewY(30deg) rotatez(-120deg) skewY(-30deg) ;
}

.grid > li:nth-child(6n+5)::before {
  background-image: linear-gradient(45deg, #85A08B, #B1D6B9);
  transform-origin: 100% 0;
  transform: skewY(-30deg) rotatez(120deg) skewY(30deg) ;
}

/* Colour 2 */
.grid > li:nth-child(6n+2)::before {
  background-image: linear-gradient(-45deg, #CC342E, #FF413A);
  transform-origin: 0 0;
  transform: skewY(30deg) rotatez(-120deg) skewY(-30deg) ;
}

.grid > li:nth-child(6n+1)::before {
  background-image: linear-gradient(45deg, #CC342E, #FF413A);
  transform-origin: 100% 0;
  transform: skewY(-30deg) rotatez(120deg) skewY(30deg) ;
}

/* Colour 3 */
.grid > li:nth-child(6n+4)::before {
  background-image: linear-gradient(-45deg, #7EA2AA, #A4D3DD);
  transform-origin: 0 0;
  transform: skewY(30deg) rotatez(-120deg) skewY(-30deg) ;
}

.grid > li:nth-child(6n+3)::before {
  background-image: linear-gradient(45deg, #7EA2AA, #A4D3DD);
  transform-origin: 100% 0;
  transform: skewY(-30deg) rotatez(120deg) skewY(30deg) ;
}

@-moz-document url-prefix() {
  .grid > li{
    margin: 20% 0 20% 0;
  }
  .grid{
    grid-template-columns: repeat(auto-fill, 33.3333vw);
  }
  @media (min-width:750px) {
    .grid{
      grid-template-columns: repeat(auto-fill, 20vw);
    }
  }
  @media (min-width:1050px) {
    .grid{
      grid-template-columns: repeat(auto-fill, 14.2857vw);
    }
  }
  @media (min-width:1350px) {
    .grid{
      grid-template-columns: repeat(auto-fill, 11.1111vw);
    }
  }
  @media (min-width:1650px) {
    .grid{
      grid-template-columns: repeat(auto-fill, 9.0909vw);
    }
  }
}

</style>