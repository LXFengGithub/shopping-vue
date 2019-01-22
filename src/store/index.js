import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ /* 使用 vuex 对 购物车的数量进行管理  */
  state: {
    infoAdd: 0
  },
  mutations: {
    add(state, value) {
      state.infoAdd ++
    }
  }
})

