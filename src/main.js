import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' // 引入模块
import '../node_modules/element-ui/lib/theme-chalk/index.css'// 引入样式
// import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'
import axios from 'axios'
Vue.use(ElementUI)
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/' // 常态值
Vue.prototype.$axios = axios// 赋值给全局对象
Vue.use(axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')