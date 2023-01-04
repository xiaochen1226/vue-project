import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  state: {
    user: {} as any
  },

  mutations: {
    updateUser(state, payload) {
      state.user = payload
    },
    updateUserAvatar(state, payload) {
      state.user.avatar_url = payload
    }
  },

  actions: {
    updateUserAsync(context, payload) {
      context.commit('updateUser', payload)
    },
    updateUserAvatar(context, payload) {
      context.commit('updateUserAvatar', payload)
    }
  },

  getters: {},

  modules: {},

  //持久化数据
  plugins: [
    createPersistedState({
      key: 'vuex',
      storage: window.localStorage
    })
  ]
})

export default store
