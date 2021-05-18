import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/home.vue"
import Screen from "../views/screen.vue"
import Photo1 from "../views/photo1.vue"
import Photo2 from "../views/photo2.vue"
import Loading from "../views/loading.vue"
import Carousel from "../views/carousel.vue"
import Lottery from "../views/lottery.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'screen',
      component: Screen
    },
    {
      path : '/heart',
      name : '/heart',
      component : Home
    },
    {
      path : '/photo1',
      name : 'photo1',
      component : Photo1
    },
    {
      path : '/photo2',
      name : 'photo2',
      component : Photo2
    },
    {
      path : '/loading',
      name : 'loading',
      component : Loading
    },
    {
      path : '/carousel',
      name : 'carousel',
      component : Carousel
    },
    {
      path : '/lottery',
      name : 'lottery',
      component : Lottery
    }
  ]
})
