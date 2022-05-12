import { createStore } from 'vuex'
// vue2.0 创建仓库 new vuex.store({})
// vue3.0 createStore({})
export default createStore({
  state: {
    username: 'zs'
  },
  getters: {
    newName (state) {
      return state.username + '!!!'
    }
  },
  mutations: {
    updateName (state) {
      state.username = 'payload'
    }
  },
  actions: {
    updateName (ctx) {
      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000)
    }
  },
  modules: {
  }
})
