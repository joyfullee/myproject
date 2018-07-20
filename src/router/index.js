import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home.vue'
import Mine from '../components/mine.vue'
import Much from '../components/much.vue'
import Produce from '../components/produce.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/much',
      component: Much
    },
    {
      path: '/produce',
      component: Produce
    },
    {
      path: '/',
      redirect:"/home"
    },

  ]
})
