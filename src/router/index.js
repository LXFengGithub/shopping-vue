import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import User from '@/components/user/index'
import Search from '@/components/search/index'
import Shopping from '@/components/shopping/index'
import NewList from '@/components/home/news/NewList'
import NewInfo from '@/components/home/news/NewInfo'
import PhotosList from '@/components/home/photos/PhotosList'
import PhotosInfo from '@/components/home/photos/PhotosInfo'
import GoodList from '@/components/home/goods/GoodList'
import GoodInfo from '@/components/home/goods/GoodInfo'



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
    path: '/home/photosList',
    component: PhotosList
  }, {
    path: '/home/photosInfo/:id',
    component: PhotosInfo
  }, {
    path: '/home/goodList',
    name: 'goodsist',
    component: GoodList
  }, {
    path: '/home/goodInfo/:id',
    name: 'goodinfo',
    component: GoodInfo
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
