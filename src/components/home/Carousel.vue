<template>
  <van-swipe class="imgwrap" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in img" :key="index">
      <img :src="item.img" alt>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  data: () => ({
    img: {}
  }),
  created() {
    // 请求图片
    this.$axios.get("/api/getlunbo").then(res => {
      if (res.data.status === 0) {
        this.img = res.data.message;
        // console.log(this.img);
      }
    });
  }
};
</script>