import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}
// 将时间戳名称赋值给一个变量（可防止拼写错误）
const timeKey = 'hema_time_key'
// 存时间戳
export function setTime (time) {
  return Cookies.set(timeKey, time)
}
// 取时间戳
export function getTime () {
  return Cookies.get(timeKey)
}
