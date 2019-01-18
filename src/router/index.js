import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import User from '@/components/user/index'
import Search from '@/components/search/index'
import Shopping from '@/components/shopping/index'
import NewList from '@/components/home/news/NewList'
import NewInfo from '@/components/home/news/NewInfo'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/home/newList',
    name: 'newList',
    component: NewList
  }, {
    path: '/home/newInfo/:id',
    name: 'newInfo',
    component: NewInfo
  }, {
    path: '/user',
    name: 'user',
    component: User
  }, {
    path: '/search',
    name: 'search',
    component: Search
  }, {
    path: '/shopping',
    name: 'shopping',
    component: Shopping
  }]
})
