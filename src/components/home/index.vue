<template>
  <div class="m-home">
    <Carousel />
    <m-nav />
    <router-view />
  </div>
</template>

<script>
import { Toast } from "vant";
import MNav from './Nav'
import Carousel from './Carousel'

export default {
  data: () => ({}),
  components: {
    MNav,
    Carousel
  }
};
</script>

<style lang="scss">
@import '@/assets/css/home'
</style>