import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'
// vue2.0 创建仓库 new vuex.store({})
// vue3.0 createStore({})
export default createStore({
  modules: {
    user,
    cart,
    category
  },
  plugins: [
    createPersistedstate({
      key: 'eribbit-client-pc-store',
      paths: ['user', 'cart']
    })
  ]
})
