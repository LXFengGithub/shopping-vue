<template>
  <div class="goodList">
    <router-link
      class="good-item"
      v-for="item in goods"
      :key="item.id"
      :to="'/home/goodInfo/' + item.thumb_id"
    >
      <!-- @click="goDetail(item.id)" -->
      <img :src="item.img_url" alt>
      <h2 class="title">{{item.zhaiyao}}</h2>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热买中</span>
          <span>
            剩余
            <i>{{item.stock_quantity}}</i> 件
          </span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    pageindex: 1,
    limit: 3,
    max: 10,
    goods: []
  }),
  created() {
    this.getGoods();
  },
  methods: {
    async getGoods() {
      const {
        data: { status, message }
      } = await this.$axios.get("/api/getgoods?pageindex=" + this.pageindex);
      if (!status) {
        this.goods = message;
        console.log(this.goods);
      }
    },

    // goDetail(id) {
    //   console.log(id);
    //   this.$router.push({ name: 'goodinfo', params: { id } });
    // }
  }
};
</script>

<style lang="scss">
.goodList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 7px;
  .good-item {
    width: 48%;
    border: 1px solid #ccc;
    box-shadow: 0 0 7px #ccc;
    padding: 2px;
    margin: 2px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 283px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
  }
}
</style>