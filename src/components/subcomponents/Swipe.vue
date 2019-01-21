<template>
  <van-swipe class="imgwrap" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in img" :key="index" >
        <img :src="item.src || item.img" alt>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  data: () => ({
  }),
  props: ["img"]
  
};
</script>