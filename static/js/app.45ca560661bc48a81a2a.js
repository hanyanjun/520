webpackJsonp([0],{"12yZ":function(t,e,a){t.exports=a.p+"static/img/13.a2db107.jpg"},"2Bxi":function(t,e,a){t.exports=a.p+"static/img/2.1d01eaa.jpg"},A4Po:function(t,e){},Ik0N:function(t,e,a){t.exports=a.p+"static/img/9.c3a9cf2.jpg"},M1a8:function(t,e,a){t.exports=a.p+"static/img/7.b0ddd24.jpg"},MPzD:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s={data:()=>({music:a("jvSg")}),setup(){},mounted(){!function(){var t=document.querySelector(".equalizer");function e(t){t.stopPropagation()}t.addEventListener("webkitAnimationStart",e,!1),t.addEventListener("webkitAnimationIteration",e,!1),t.addEventListener("animationStart",e,!1),t.addEventListener("animationIteration",e,!1)}()}},n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"center-me"},[e("div",{staticClass:"equalizer"}),this._v(" "),e("audio",{staticStyle:{opacity:"0"},attrs:{autoplay:"",muted:"",loop:""}},[e("source",{attrs:{src:a("jvSg"),type:"audio/mp3"}}),this._v("\nYour browser does not support the audio element.\n")])])}]};var r=a("VU/8")(s,n,!1,function(t){a("hGPb")},"data-v-114cd042",null).exports,o={data:()=>({timer:null,max:365,number:0}),mounted(){this.timer=setInterval(()=>{let t=Math.floor(10*Math.random()+1);(t=this.number+t)>=this.max?(clearInterval(this.timer),this.number=this.max):this.number=t},50);document.querySelector(".number");window.requestAnimationFrame=window.__requestAnimationFrame||window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t,e){var a=e.__lastTime;void 0===a&&(a=0);var i=Date.now(),s=Math.max(1,33-(i-a));window.setTimeout(t,s),e.__lastTime=i+s},window.isDevice=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test((navigator.userAgent||navigator.vendor||window.opera).toLowerCase());var t=!1,e=function(){if(!t){t=!0;var e=document.getElementById("heart"),a=e.getContext("2d"),i=e.width=1*innerWidth,s=e.height=1*innerHeight,n=Math.random;a.fillStyle="rgba(0,0,0,1)",a.fillRect(0,0,i,s);var r,o=function(t){return[Math.pow(Math.sin(t),3),-(15*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))]},c=function(t,e,a,i,s){return[i+t[0]*e,s+t[1]*a]},l=[];for(r=0;r<2*Math.PI;r+=.1)l.push(c(o(r),210,13,0,0));for(r=0;r<2*Math.PI;r+=.1)l.push(c(o(r),150,9,0,0));for(r=0;r<2*Math.PI;r+=.1)l.push(c(o(r),90,5,0,0));var p=l.length,u=[],v=[];for(r=0;r<p;r++){var d=n()*i,m=n()*s;v[r]={vx:0,vy:0,R:2,speed:n()+5,q:~~(n()*p),D:r%2*2-1,force:.2*n()+.7,f:"hsla(0,"+~~(40*n()+60)+"%,"+~~(60*n()+20)+"%,.3)",trace:[]};for(var h=0;h<50;h++)v[r].trace[h]={x:d,y:m}}var g=.4,f=.01,_=0,w=function(){var t=-Math.cos(_);for(function(t,e){for(r=0;r<l.length;r++)u[r]=[],u[r][0]=t*l[r][0]+i/2,u[r][1]=e*l[r][1]+s/2}(.5*(1+t),.5*(1+t)),_+=(Math.sin(_)<0?9:t>.8?.2:1)*f,a.fillStyle="rgba(0,0,0,.1)",a.fillRect(0,0,i,s),r=v.length;r--;){var o=v[r],c=u[o.q],d=o.trace[0].x-c[0],m=o.trace[0].y-c[1],x=Math.sqrt(d*d+m*m);for(10>x&&(.95<n()?o.q=~~(n()*p):(.99<n()&&(o.D*=-1),o.q+=o.D,o.q%=p,0>o.q&&(o.q+=p))),o.vx+=-d/x*o.speed,o.vy+=-m/x*o.speed,o.trace[0].x+=o.vx,o.trace[0].y+=o.vy,o.vx*=o.force,o.vy*=o.force,h=0;h<o.trace.length-1;){var y=o.trace[h],b=o.trace[++h];b.x-=g*(b.x-y.x),b.y-=g*(b.y-y.y)}for(a.fillStyle=o.f,h=0;h<o.trace.length;h++)a.fillRect(o.trace[h].x,o.trace[h].y,1,1)}window.requestAnimationFrame(w,e)};w()}},a=document.readyState;"complete"===a||"loaded"===a||"interactive"===a?e():document.addEventListener("DOMContentLoaded",e,!1)}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap"},[e("canvas",{attrs:{id:"heart"}}),this._v(" "),e("p",{staticClass:"number"},[this._v(this._s(this.number)+"天")])])},staticRenderFns:[]};var l=a("VU/8")(o,c,!1,function(t){a("SGez")},"data-v-2adf4b74",null).exports,p={data:()=>({openArr:[],index:-1}),setup(){},methods:{unLock(){this.index=0,setTimeout(()=>{this.$emit("onChange")},1200)}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"box item-1",on:{click:t.unLock}},[a("div",{class:["overlay","ovrl-left","ovrl-1",0===t.index&&"move-right"]},[t._v("开  启")]),t._v(" "),a("div",{class:["overlay","ovrl-right","ovrl-1",0===t.index&&"move-left"]},[t._v("520")]),t._v(" "),a("div",{class:["locker",0===t.index&&"unlock"]},[a("i",{staticClass:"arrow fa fa-arrows-h",attrs:{"aria-hidden":"true"}})])])])},staticRenderFns:[]};var v=a("VU/8")(p,u,!1,function(t){a("S5wg")},"data-v-4ba9e3bc",null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"grid"},[i("li",[i("img",{attrs:{src:a("tGse"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("2Bxi"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("lQgp"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("poA4"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("vGcb"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("k9Qt"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("M1a8"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("Rc0q"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("Ik0N"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("wCKK"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("cABq"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("XCfw"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("12yZ"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("anPB"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("qoG4"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("Qe1D"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("YqNe"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("tGse"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("2Bxi"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("lQgp"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("poA4"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("vGcb"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("k9Qt"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("M1a8"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("Rc0q"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("Ik0N"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("wCKK"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("cABq"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("XCfw"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("12yZ"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("anPB"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("qoG4"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("Qe1D"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:a("YqNe"),alt:"图片"}})]),t._v(" "),i("li",[i("img",{attrs:{src:"https://images.unsplash.com/photo-1514911278673-b33f6439fad3?auto=format&fit=crop&w=250&h=250&q=80",alt:"图片"}})])])}]};var m=a("VU/8")(null,d,!1,function(t){a("QlnD")},"data-v-79f1ee3e",null).exports,h={data:()=>({openArr:[],imgs:[a("tGse"),a("poA4"),a("Rc0q"),a("cABq"),a("anPB"),a("Qe1D"),a("YqNe")]}),setup(){},methods:{unLock(t){this.openArr.push(t)}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},t._l(t.imgs,function(e,i){return a("div",{key:i,staticClass:"box item-1",on:{click:function(e){return t.unLock(i)}}},[a("img",{attrs:{src:e,alt:""}}),t._v(" "),a("div",{class:["overlay","ovrl-left","ovrl-1",t.openArr.includes(i)&&"move-right"]},[t._v("盒")]),t._v(" "),a("div",{class:["overlay","ovrl-right","ovrl-1",t.openArr.includes(i)&&"move-left"]},[t._v("盲")]),t._v(" "),a("div",{class:["locker",t.openArr.includes(i)&&"unlock"]},[a("i",{staticClass:"arrow fa fa-arrows-h",attrs:{"aria-hidden":"true"}})])])}),0)},staticRenderFns:[]};var f=a("VU/8")(h,g,!1,function(t){a("YVpm")},"data-v-2e773338",null).exports,_={data:()=>({}),props:{rate:Number},mounted(){}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[t._m(0),t._v(" "),a("p",{staticClass:"loading-text"},[t._v("Loading... \n            "),t.rate?[t._v("\n                "+t._s(t.rate)+"%\n            ")]:t._e()],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"preloader"},[e("span"),this._v(" "),e("span"),this._v(" "),e("span")]),this._v(" "),e("div",{staticClass:"shadow"})])}]};var x={components:{Loading:a("VU/8")(_,w,!1,function(t){a("A4Po")},"data-v-5298386b",null).exports},props:{rate:Number},setup(){}},y={render:function(){var t=this.$createElement;return(this._self._c||t)("Loading",{attrs:{rate:this.rate}})},staticRenderFns:[]},b=a("VU/8")(x,y,!1,null,null,null).exports,q={setup(){},methods:{skipP1(){this.$emit("onChange",1)},skipP2(){this.$emit("onChange",2)}},mounted(){var t=240;setTimeout(n,1e3);var e=document.getElementById("drag-container"),a=document.getElementById("spin-container"),i=[...a.getElementsByTagName("img")];a.style.width="120px",a.style.height="170px";var s=document.getElementById("ground");function n(e){for(var a=0;a<i.length;a++)i[a].style.transform="rotateY("+a*(360/i.length)+"deg) translateZ("+t+"px)",i[a].style.transition="transform 1s",i[a].style.transitionDelay=e||(i.length-a)/4+"s"}function r(t){u>180&&(u=180),u<0&&(u=0),t.style.transform="rotateX("+-u+"deg) rotateY("+p+"deg)"}function o(t){a.style.animationPlayState=t?"running":"paused"}s.style.width=3*t+"px",s.style.height=3*t+"px";var c=0,l=0,p=0,u=10;a.style.animation=`spinRevert ${Math.abs(-60)}s infinite linear`,document.onpointerdown=function(t){clearInterval(e.timer);var a=(t=t||window.event).clientX,i=t.clientY;return this.onpointermove=function(t){var s=(t=t||window.event).clientX,n=t.clientY;p+=.1*(c=s-a),u+=.1*(l=n-i),r(e),a=s,i=n},this.onpointerup=function(t){e.timer=setInterval(function(){p+=.1*(c*=.95),u+=.1*(l*=.95),r(e),o(!1),Math.abs(c)<.5&&Math.abs(l)<.5&&(clearInterval(e.timer),o(!0))},17),this.onpointermove=this.onpointerup=null},!1},document.onmousewheel=function(e){var a=(e=e||window.event).wheelDelta/20||-e.detail;t+=a,n(1)}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{attrs:{id:"drag-container"}},[i("div",{attrs:{id:"spin-container"}},[i("img",{attrs:{src:a("tGse"),alt:""},on:{click:t.skipP1}}),t._v(" "),i("img",{attrs:{src:a("poA4"),alt:""},on:{click:t.skipP2}}),t._v(" "),i("img",{attrs:{src:a("Rc0q"),alt:""}}),t._v(" "),i("img",{attrs:{src:a("cABq"),alt:""}}),t._v(" "),i("img",{attrs:{src:a("anPB"),alt:""}}),t._v(" "),i("img",{attrs:{src:a("Qe1D"),alt:""}}),t._v(" "),i("img",{attrs:{src:a("YqNe"),alt:""}})]),t._v(" "),i("div",{attrs:{id:"ground"}})])])},staticRenderFns:[]};var A=a("VU/8")(q,C,!1,function(t){a("d54e")},"data-v-7afefd48",null).exports,j={setup(){}},M={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap"},[e("iframe",{staticClass:"frame-wrap",attrs:{src:"https://hanyanjun.github.io/test/",frameborder:"0"}})])}]};var k={name:"App",components:{Music:r,Heart:l,Screen:v,Photo1:m,Photo2:f,Loading:b,Carousel:A,Lottery:a("VU/8")(j,M,!1,function(t){a("tZym")},"data-v-4ffcf888",null).exports},data:()=>({step:0,imgs:["../assets/1.jpg","../assets/2.jpg","../assets/3.jpg","../assets/4.jpg","../assets/5.jpg","../assets/6.jpg","../assets/7.jpg","../assets/8.jpg","../assets/9.jpg","../assets/10.jpg","../assets/11.jpg"],rate:0,timer:null,photo:0}),mounted(){let t=0,e=0;window.addEventListener("touchstart",e=>{var a=e.targetTouches[0];t=a.pageY}),window.addEventListener("touchmove",t=>{var a=t.targetTouches[0];e=a.pageY}),window.addEventListener("touchend",a=>{var i=e-t,s=document.documentElement.clientHeight;t!=Math.abs(i)&&Math.abs(i)>.2*s&&(i<0?this.change2():this.change1()),t=e=0})},methods:{onChange(){this.step=this.step+1,this.timer=setInterval(()=>{this.rate+=5,100===this.rate&&clearInterval(this.timer)},300)},onChangePhoto(t){this.photo=t,this.step=4},change1(){if(0!==this.step){let t=this.step-1;t=t<=0?0:t,this.step=t}},change2(){if(0!==this.step&&this.imgs.length){let t=this.step+1;4===t&&(t=5),this.step=t}}}},E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[0!==t.step?a("Music"):t._e(),t._v(" "),0===t.step?a("Screen",{on:{onChange:t.onChange}}):t._e(),t._v(" "),1===t.step?a("Loading",{attrs:{rate:t.rate}}):t._e(),t._v(" "),2===t.step?a("Heart"):t._e(),t._v(" "),3===t.step?a("Carousel",{on:{onChange:t.onChangePhoto}}):t._e(),t._v(" "),4===t.step&&1===t.photo?a("Photo1"):t._e(),t._v(" "),4===t.step&&2===t.photo?a("Photo2"):t._e(),t._v(" "),5===t.step?a("Lottery"):t._e(),t._v(" "),a("router-view")],1)},staticRenderFns:[]};var P=a("VU/8")(k,E,!1,function(t){a("WTAR")},null,null).exports,R=a("/ocq");i.a.use(R.a);var L=new R.a({routes:[{path:"/"}]});a("MPzD");i.a.config.productionTip=!1,new i.a({el:"#app",router:L,components:{App:P},template:"<App/>"})},Qe1D:function(t,e,a){t.exports=a.p+"static/img/16.42f4ddd.jpg"},QlnD:function(t,e){},Rc0q:function(t,e,a){t.exports=a.p+"static/img/8.670da2d.jpg"},S5wg:function(t,e){},SGez:function(t,e){},WTAR:function(t,e){},XCfw:function(t,e,a){t.exports=a.p+"static/img/12.69c0958.jpg"},YVpm:function(t,e){},YqNe:function(t,e,a){t.exports=a.p+"static/img/17.a44d584.jpg"},anPB:function(t,e,a){t.exports=a.p+"static/img/14.1fe9335.jpg"},cABq:function(t,e,a){t.exports=a.p+"static/img/11.603f0c0.jpg"},d54e:function(t,e){},hGPb:function(t,e){},jvSg:function(t,e,a){t.exports=a.p+"static/media/9420.b0d75cb.mp3"},k9Qt:function(t,e,a){t.exports=a.p+"static/img/6.182d1ac.jpg"},lQgp:function(t,e,a){t.exports=a.p+"static/img/3.ef98089.jpg"},poA4:function(t,e,a){t.exports=a.p+"static/img/4.0af7ddc.jpg"},qoG4:function(t,e,a){t.exports=a.p+"static/img/15.76a15c1.jpg"},tGse:function(t,e,a){t.exports=a.p+"static/img/1.6315e81.jpg"},tZym:function(t,e){},vGcb:function(t,e,a){t.exports=a.p+"static/img/5.0e27d99.jpg"},wCKK:function(t,e,a){t.exports=a.p+"static/img/10.c614ab8.jpg"}},["NHnr"]);
//# sourceMappingURL=app.45ca560661bc48a81a2a.js.map