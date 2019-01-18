<template>
  <div id="app">
    <van-nav-bar title="彩 旗 飘 飘" left-text="返回" right-text="设置" left-arrow @click-left="onClickLeft" @click-right="onClickRight"/>

    <transition enter-active-class="fadeInRight animated" leave-active-class="fadeOutLeft animated">
      <router-view/>      
    </transition>

    <van-tabbar v-model="active">
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-circle-o" info="5">会员</van-tabbar-item>
      <van-tabbar-item to="/shopping" icon="shopping-cart-o" info="20">购物车</van-tabbar-item>
      <van-tabbar-item to="/search" icon="search" dot>搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// 轻提示 只有在哪个页面使用 哪个页面引入才可以，不能全局。
import { Toast } from "vant";

export default {
  name: "App",
  data() {
    return {
      active: 0
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回中...");
    },
    onClickRight() {
      Toast("按钮");
    }
  },
  components: {
  }
};
</script>

<style lang="scss">
#app {
  overflow: hidden;
}
.v-leave-to{
  position: absolute;
  // 因为 图片的宽度会，影响离开时的移动距离。  目前图片宽度为 2张。
  transform: translate(-200%);
}
</style>
