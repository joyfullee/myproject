import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/index.vue'
import Home from '../views/home.vue'
import Mine from '../views/mine.vue'
import Much from '../views/much.vue'
import Produce from '../views/produce.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Licai from '../views/licai.vue'
import Xinshou from '../views/xinshou.vue'
import Yaoqing from '../views/yaoqing.vue'
import Huodong from '../views/huodong.vue'
import Hot from '../views/hot.vue'
import Detail from '../views/detail.vue'
import Tixian from '../views/tixian.vue'
import Jilu from '../views/jilu.vue'
import Chongzhi from '../views/chongzhi.vue'
Vue.use(Router)

export default new Router({

  routes: [{
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
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
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
          component: Mine
        },
        {
          path: '/index/much',
          component: Much
        },
        {
          path: '/index/produce',
     
          component: Produce,   
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
      path: '/chongzhi',
      component: Chongzhi
    },
    {
      path: '/tixian',
      component: Tixian
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/jilu',
      component: Jilu
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
