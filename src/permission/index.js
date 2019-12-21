// 处理路由拦截器  导航守卫
import router from '../router/index' // 引入路由

// 全局前置守卫 当路由发生变化时，这个方法里的回调函数就会执行
router.beforeEach(function (to, from, next) {
  if (to.path.startsWith('/home')) { // 判断是否是/home开有的
    let token = window.localStorage.getItem('user-token')
    if (token) {
      next()// 放过
    } else {
      next('/login')// 跳转到登录页面，回去买票去
    }
  } else {
    next()// 直接放过
  }
})
