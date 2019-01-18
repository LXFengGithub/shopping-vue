<template>
  <div class="newList">
    <router-link v-for="(item, index) in newsList" :key="index" :to="'/home/newInfo/' + item.id"  >
      <van-card
        :key="index"
        :price="item.add_time"
        currency
        :desc="item.zhaiyao"
        :title="item.title"
        :thumb="item.img_url"
      >
        <van-button class="mbut van-button-round" slot="footer" size="mini">查看: {{item.click}}</van-button>
        <!-- 还可 通过 官方的slot="title" 或者其他等等，见官方文档 的卡片样式，来更改样式 -->
      </van-card>
    </router-link>
  </div>
</template>

<script>
import Toast from "vant";

export default {
  data: () => ({
    newsList: []
  }),
  created() {
    this.getnews();
  },
  methods: {
    async getnews() {
      const {
        data: { status, message }
      } = await this.$axios.get("api/getnewslist");
      if (!status) {
        console.log(message);
        this.newsList = message;
      } else {
        Toast("获取新闻列表失败");
      }
    }
  }
};
</script>

<style lang="scss">
.newList {
  .van-card {
    height: 70px;

    .van-card__header {
      height: 55px;
    }
    .van-card__content {
      height: 55px;
    }
    a.van-card__thumb {
      height: 55px;
    }
  }
  .van-card__price {
    color: #666;
  }
  .van-button-round {
    border-radius: 10em;
  }
  .mbut {
    top: -20px;
  }
}
</style>