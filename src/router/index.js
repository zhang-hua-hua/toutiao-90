import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import Login from '../views/login/index.vue'
import Home2 from '../views/home/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login' // 强制跳转链接器
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '', // 二级路由地址什么都不写  代表二级路由默认的组件
      component: Home2
    }, {
      path: 'comment',
      component: () => import('../views/comment')
    }, {
      path: 'material',
      component: () => import('../views/mateial')
    }, {
      path: 'articles', // 文章列表
      component: () => import('../views/articles/index.vue')
    }, {
      path: 'publish', // 发布文章
      component: () => import('../views/publish/index.vue')
    }, {
      path: 'publish/:articleId', // 修改文章
      component: () => import('../views/publish/index.vue')
    }]
  }, {
    path: '/login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
