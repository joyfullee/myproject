import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/index.vue'
import Home from '../views/home.vue'
import Mine from '../views/mine.vue'
import Much from '../views/much.vue'
import Produce from '../views/produce.vue'
import Login from '../views/login.vue'
import Regist from '../views/Regist.vue'
import Licai from '../views/licai.vue'
import Xinshou from '../views/xinshou.vue'
import Yaoqing from '../views/yaoqing.vue'
import Huodong from '../views/huodong.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      component: Login
    },
    {
      path: '/regist',
      component: Regist
    },
    {
      path: '/',
      redirect: "/index",
      component: Index,
      children: [{
          path: '/index',
          component: Home
        },
        {
          path: '/index/mine',
          component: Mine
        },
        {
          path: '/index/much',
          component: Much
        },
        {
          path: '/index/produce',
          component: Produce
        },
      ]
    },
    {
      path: '/licai',
      component: Licai
    },
    {
      path: '/huodong',
      component: Huodong
    },
    {
      path: '/yaoqing',
      component: Yaoqing
    },
    {
      path: '/xinshou',
      component: Xinshou
    },
  ]
})
