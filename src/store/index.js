import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var cart = JSON.parse(localStorage.getItem('cart')) || []

export default new Vuex.Store({ /* 使用 vuex 对 购物车的数量进行管理  */
  state: {
    cart
  },
  mutations: {
    add(state, goodinfo) {
      // console.log(state.cart)
      var flag = false;

      state.cart.some(item => {  /* 如果同一个id 就只增加数量 */
        if(item.id == goodinfo.id){
          item.count += parseInt(goodinfo.count)
          flag = true
          return true
        }
      })

      if(!flag){
        state.cart.push(goodinfo)
      }

      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  getters: {    /* getters 可以认为是 store的计算属性 */
    getAllCount(state) {
    var c = 0;
    state.cart.forEach(item => {
      c += item.count
    })
    return c
   }
  }
})

