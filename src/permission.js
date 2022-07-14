import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'

const whiteList = ['/login', '/404']
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  // 开启进度效果
  const token = store.state.user.token
  NProgress.start()
  // 权限控制
  if (token) {
    if (to.path === '/login') {
      NProgress.done()
      next('/')
    } else {
      // 当token存在且去其他页面，就发起ajax请求用户资料
      if (!store.state.user.userInfo.id) {
        store.dispatch('user/getInfo')
      }
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
router.afterEach(() => {
  NProgress.done()
})
