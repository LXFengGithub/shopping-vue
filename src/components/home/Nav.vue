<template>
     <div class="van-tab__pane" style>
      <div class="van-col van-col--8 mcol" v-for="(item, index) in icon" :key="index">
        <i class="icon">
          <img :src="item.imgurl" alt>
        </i>
        <span>{{item.name}}</span>
      </div>
    </div>
</template>

<script>
export default {
  data: () => ({
      icon: [
      { imgurl: require("./images/menu1.png"), name: '地址' },
      { imgurl: require("./images/menu2.png"), name: '订餐' },
      { imgurl: require("./images/menu3.png"), name: '购物车' },
      { imgurl: require("./images/menu4.png"), name: '付钱' },
      { imgurl: require("./images/menu5.png"), name: '啦啦' },
      { imgurl: require("./images/menu6.png"), name: '更多' },
    ]
    })
};
</script>