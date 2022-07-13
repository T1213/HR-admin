import { login } from '@/api/user'
const state = {
  token: null
}
const mutations = {
  setToken (state, payload) {
    state.token = payload
  }
}
const actions = {
  async login ({ commit }, data) {
    try {
      const res = await login(data)
      console.log(res)
      commit.dispatch('settoken', res.data.data)
    } catch (err) {
      console.log(err)
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
