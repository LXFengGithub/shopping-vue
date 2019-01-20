<template>
  <div class="goodList">
    <div class="good-item">
      <img src="./1.jpg" alt="">
      <h2 class="title">华为荣耀</h2>
      <div class="info">
        <p class="price"> 
          <span class="now">￥999</span>
          <span class="old">￥1280</span>
        </p>
        <p class="sell">
          <span>热买中</span>
          <span>剩余 <i>1</i> 件 </span>
        </p>
      </div>
    </div>
    <div class="good-item">
      <img src="./1.jpg" alt="">
      <h2 class="title">华为荣耀</h2>
      <div class="info">
        <p class="price"> 
          <span class="now">￥999</span>
          <span class="old">￥1280</span>
        </p>
        <p class="sell">
          <span>热买中</span>
          <span>剩余 <i>1</i> 件 </span>
        </p>
      </div>
    </div>
    <div class="good-item">
      <img src="./1.jpg" alt="">
      <h2 class="title">华为荣耀</h2>
      <div class="info">
        <p class="price"> 
          <span class="now">￥999</span>
          <span class="old">￥1280</span>
        </p>
        <p class="sell">
          <span>热买中</span>
          <span>剩余 <i>1</i> 件 </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({

    })
};
</script>

<style lang="scss">
.goodList{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 7px;
  .good-item{
    width: 48%;
    border: 1px solid #ccc;
    box-shadow: 0 0 7px #ccc;
    padding: 2px;
    margin: 2px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 283px;
    img{
      width: 100%;
    }
    .title{
      font-size: 14px;
    }
  }
}
</style>