import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import User from '@/components/user/index'
import Search from '@/components/search/index'
import Shopping from '@/components/shopping/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    }
  ]
})
