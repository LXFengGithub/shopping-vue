<template>
  <div class="cart">
    <div class="card">
      <van-switch v-model="checked" size="15px"/>
      <van-card num="2" price="2.00" desc="描述信息" title="商品标题" :thumb="'http://localhost:5000/share/ithumbs/images/8.jpg'"/>
    </div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    checked: ""
  }),
  methods: {
    onSubmit() {}
  }
};
</script>

<style lang="scss">
.cart {
  .van-submit-bar {
    bottom: 50px;
  }
  .card{
    display: flex;
    background-color: #fafafa;;
  }
  .van-card{
    margin: 0;
  }
}
</style>
