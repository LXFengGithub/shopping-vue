<template>
  <div class="goodsInfo">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="flag" ref="sell"></div>
    </transition>
    <swipe :img="img"/>
    <h3 class="title">手机</h3>
    <p class="price">
      <span class="old">
        市场价：
        <del>￥2000</del>
      </span>
      <span class="now">
        销售价：￥
        <i>1980</i>
      </span>
    </p>
    <div class="numb">
      购买数量：
      <van-stepper class="numbbut" v-model="value"/>
    </div>
    <van-goods-action style="position:unset">
      <van-goods-action-big-btn text="加入购物车" :disabled='Mdisabled' @click="onClickBigBtn"/>
      <van-goods-action-big-btn primary text="立即购买"/>
    </van-goods-action>
  </div>
</template>

<script>
import Swipe from "@/components/subcomponents/Swipe"

export default {
  data: () => ({
    id: "",
    value: 1,
    flag: false,
    img: {},
    info: [],
    xDist: 0,
    yDist: 0,
    Mdisabled: false
  }),
  created() {
    this.id = this.$route.params.id
    this.getInfo()
  },
  methods: {
    async getInfo() {
      const {
        data: { status, message }
      } = await this.$axios.get("/api/getthumimages/" + this.id)
      if (!status) {
        // console.log(message)
        this.img = message
      }
    },

    onClickBigBtn() {
      this.flag=!this.flag
      this.Mdisabled = true
      setTimeout(()=>{
        this.Mdisabled = false
      },700)
      this.$store.commit("add")
    },
    getBound() { /* 获取小球在页面中的位置 */
      // 获取小球在页面中的位置
      const ballPosition = this.$refs.sell.getBoundingClientRect()
      // 获取 辉标 在页面中的位置 不涉及到数据 渲染的时候 可以使用少量的 js 原生
      const badgePosition = document
        .querySelector("#cart .van-info")
        .getBoundingClientRect()
      this.xDist = badgePosition.top - ballPosition.top
      this.yDist = badgePosition.left - ballPosition.left
      // console.log(this.xDist, this.yDist)
    },
    /* 添加半场动画  */
    beforeEnter(el) {
      el.style.transform = "translate(0px, 0px)"
    },
    enter(el, done) {
      el.offsetWidth  

      this.getBound()
      el.style.transform = `translate(${this.yDist}px, ${this.xDist}px)`
      el.style.transition = "all 0.8s ease"
         
      done();
    },
    afterEnter(el) {
      this.flag = !this.flag

      
      
    }
  },

  components: {
    Swipe
  }
};
</script>

<style  lang="scss">
.goodsInfo {
  height: 800px;
  margin: 7px;
  .ball {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    z-index: 99;
    top: 364px;
    left: 142px;
  }
  .imgwrap {
    height: 200px;
    text-align: center;
    img {
      height: 100%;
    }
  }
  .title {
  }
  .price {
    color: #666;
    .now{
      color: red;
    }
    .old{
      color: #999;
    }
  }
  .numb{
    margin: 5px 0;
    height: 38px;
    line-height: 38px;
    .numbbut{
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>