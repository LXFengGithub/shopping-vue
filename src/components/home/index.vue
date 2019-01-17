<template>
  <div class="m-home">
    <van-swipe class="imgwrap" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in img" :key="index">
        <img :src="item.img" alt>
      </van-swipe-item>
    </van-swipe>

    <div class="van-tab__pane" style>
      <div class="van-col van-col--8 mcol" v-for="(item, index) in icon" :key="index">
        <i class="icon">
          <img :src="item.imgurl" alt>
        </i>
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data: () => ({
    img: {},
    icon: [
      { imgurl: require("./images/menu1.png"), name: '地址' },
      { imgurl: require("./images/menu2.png"), name: '订餐' },
      { imgurl: require("./images/menu3.png"), name: '购物车' },
      { imgurl: require("./images/menu4.png"), name: '付钱' },
      { imgurl: require("./images/menu5.png"), name: '啦啦' },
      { imgurl: require("./images/menu6.png"), name: '更多' },
    ]
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

<style  lang="scss">
.m-home {
  height: 100%;
  .imgwrap {
    height: 200px;
  }
  img {
    width: 100%;
  }
  .icon {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 15px 0;
  }
}
.van-tab__pane {
  .van-col-list {
    padding-top: 10px;
    box-sizing: border-box;
    min-height: calc(100vh - 65px);
  }
  .van-col {
    float: none;
    text-align: center;
    height: 100px;
    display: inline-block;
    vertical-align: middle;
  }
  .van-col span {
    display: block;
    padding: 0 5px;
    font-size: 12px;
    line-height: 14px;
  }
  .van-icon {
    font-size: 32px;
    margin: 15px 0;
    color: #455a64;
  }
  .van-tab__pane {
    padding-top: 10px;
  }
  .mcol {
    width: 32.39%;
  }
}
</style>