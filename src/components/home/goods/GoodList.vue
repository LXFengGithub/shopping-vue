<template>
  <div class="goodList">
    <div
      class="good-item"
      v-for="(item, index) in goods"
      :key="index"
      @click="goDetail(item.thumb_id)"
    >
      <!-- :to="'/home/goodInfo/' + item.thumb_id" -->
      <img :src="item.img_url" alt>
      <h2 class="title">{{item.zhaiyao}}</h2>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥
            <del>{{item.market_price}}</del>
          </span>
        </p>
        <p class="sell">
          <span>热买中</span>
          <span>
            剩余
            <i>{{item.stock_quantity}}</i> 件
          </span>
        </p>
      </div>
    </div>
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
      } = await this.$axios.get(`/api/getgoods?pageindex=${this.pageindex}&limit=${this.limit}`);
      if (!status) {
        this.goods = message;
        console.log(this.goods);
      }
    },

    goDetail(id) {
      console.log(id);
      this.$router.push("/home/goodInfo/" + id)
    }
  }
};
</script>

<style lang="scss">
.goodList {
  i {
    font-style: normal;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 7px;
  .good-item {
    width: 47%;
    border: 1px solid #ccc;
    box-shadow: 0 0 7px #ccc;
    color: #333;
    padding: 3px;
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
    .info {
      background-color: #eee;
      padding: 0 4px;
      .price {
        .now {
          color: red;
          font-weight: 600;
        }
        .old {
          font-size: 12px;
          color: #888;
        }
      }
      .sell {
        font-size: 13px;
        color: #666;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>