import { login, getInfo, getUserDetailById } from '@/api/user'
import { setToken, getToken, removeToken, setTime } from '@/utils/auth'
const state = {
  token: getToken(),
  userInfo: {}
}
const mutations = {
  setToken (state, payload) {
    state.token = payload
  },
  setUserinfo (state, payload) {
    state.userInfo = payload
  },
  removeToken (state) {
    state.token = null
    removeToken()
  },
  removeUserinfo (state) {
    state.userInfo = {}
  }

}
const actions = {
  async login ({ commit }, data) {
    const res = await login(data)
    console.log(res)
    commit('setToken', res)
    setToken(res)
    setTime(Date.now())
  },
  async getInfo ({ commit }) {
    const res = await getInfo()
    console.log(res)
    const res1 = await getUserDetailById(res.userId)
    console.log(res1)
    commit('setUserinfo', { ...res, ...res1 })
  },
  logout ({ commit }) {
    commit('removeToken')
    commit('removeUserinfo')
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
