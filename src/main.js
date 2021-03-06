// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import Animate from 'animate.css'
Vue.use(Animate)

Vue.config.productionTip = false

/* 引入 ui vant框架 */
import Vant,{Lazyload,GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn, SubmitBar} from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
   .use(Lazyload)
   .use(GoodsAction)
   .use(GoodsActionBigBtn)
   .use(GoodsActionMiniBtn)
   .use(SubmitBar)

// 引入axios, 挂载到 Vue原型上
import axios from 'axios'
// 设置全局访问根路径
axios.defaults.baseURL = 'http://127.0.0.1:5000/'
Vue.prototype.$axios = axios

// 导入格式化事件的插件
import moment from 'moment'
// 定义全局过滤器
Vue.filter('datefmt', (data, arg = 'YYYY-MM-DD hh:mm:ss') => {
  return moment(data).format(arg)
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
