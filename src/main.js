import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' // 引入模块
import '../node_modules/element-ui/lib/theme-chalk/index.css'// 引入样式
// import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
