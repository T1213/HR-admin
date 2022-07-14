
export const imgerror = {
  // 数据更新的时候显示
  inserted (el, binding) {
    el.error = function () {
      el.src = 'http://ihrm.itheima.net/static/img/head.b6c3427d.jpg'
    }
  }
}
