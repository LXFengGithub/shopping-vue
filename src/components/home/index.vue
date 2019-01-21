<template>
  <div class="m-home">
    <Swipe :img="img"/>
    <m-nav />
    <router-view />
  </div>
</template>

<script>
import { Toast } from "vant"
import MNav from './Nav'
import Swipe from '@/components/subcomponents/Swipe'

export default {
  data: () => ({
    img: {}
  }),
  created() {
    // 请求图片
    this.$axios.get("api/getlunbo").then(res => {
      if (res.data.status === 0) {
        this.img = res.data.message;
      }
    });
  },
  components: {
    MNav,
    Swipe
  }
};
</script>

<style lang="scss">
@import '@/assets/css/home'
</style>