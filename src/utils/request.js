// 封装一个axios
import axios from 'axios'

// 常态值
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // 执行请求ok时
  let token = window.localStorage.getItem('user-token') // 取token
  config.headers.Authorization = `Bearer ${token}` // 统一注入token
  return config // 表示会用config请求进行后台操作
}, function () {
  // 执行请求No时，这个参数是不经常用的
})
export default axios
