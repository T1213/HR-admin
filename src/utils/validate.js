/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername (str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
/**
 *手机号校验
 * @param {手机号} mobile
 * @returns
 */
export function validMobile (mobile) {
  const reg = /^(?:(?:\+|00)86)?1\d{10}$/
  return reg.test(mobile)
}
