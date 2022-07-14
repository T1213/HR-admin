import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import router from '@/router'
import { getTime } from './auth'
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 开发环境
  timeout: 10000
})
// 添加请求拦截器--一般是ajax要请求头的时候
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const token = store.state.user.token// 获取token，从vuex中拿，响应式数据
  if (token) { // 如果有token，设置请求头
    const time = Date.now() - getTime()
    if (time > 7200000) {
      store.dispatch('user/logout')
      router.push('/login')
    }
    config.headers['Authorization'] = 'Bearer ' + token
    // config.headers = {  //这样写请求头就只有一个，写死了
    //   Authorization: 'Bearer ' + token
    // }
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
//
// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  const { data, success, message } = response.data
  if (success) {
    return data
  } else {
    Message.error(message)
    return Promise.reject(new Error(message))
  }
}, function (error) {
  if (error.response && error.response.data && error.response.data.code === 10002) {
    store.dispatch('user/logout')
    router.push('/login')
  }
  // 对响应错误做点什么
  return Promise.reject(error)
})
export default request
