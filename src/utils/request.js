// 封装一个axios
import axios from 'axios'
import { Message } from 'element-ui'
import router from '../router/index'
import JSONBig from 'json-bigint'// 引入第三方包

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
axios.defaults.transformResponse = [function (data) {
  return JSONBig.parse(data)// 解决js出路大数字是真问题
}]

// 响应拦截器
axios.interceptors.response.use(function (response) {
  // 成功时执行该函数   什么是成功状态码是 200 201 204时
  return response.data ? response.data : {}
}, function (error) {
  // 失败是执行的函数
  let status = error.response.status
  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 507:
      message = '服务器数据库异常'
      break
    case 401:
      window.localStorage.removeItem('user-token')// 删除过期的token
      router.push('/login')
      break
    case 403:
      message = '没有设置这条评论的权限'
      break
    default:
      break
  }
  Message({ type: 'warning', message: message })// 提示信息
  // 这里需要注意 错误执行函数  如果不做任何操作  还会进入到promise then中
  return Promise.reject(error)// 只要reject=>catch
})
export default axios
