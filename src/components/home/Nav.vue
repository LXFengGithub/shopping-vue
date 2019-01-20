<template>
     <div class="van-tab__pane" style>
      <router-link tag="div" class="van-col van-col--8 mcol" 
      v-for="(item, index) in icon" 
      :key="index" :to="item.routers">
        <i class="icon">
          <img :src="item.imgurl" alt>
        </i>
        <span>{{item.name}}</span>
      </router-link> 
    </div>
</template>

<script>
// import 

export default {
  data: () => ({
      icon: [
      { imgurl: require("./images/menu1.png"), name: '新闻资讯', routers: '/home/newList'},
      { imgurl: require("./images/menu2.png"), name: '图片分享', routers: '/home/photosList'},
      { imgurl: require("./images/menu3.png"), name: '商品购买', routers: '/home/goodList'},
      { imgurl: require("./images/menu4.png"), name: '留言反馈', routers: '/home/newList'},
      { imgurl: require("./images/menu5.png"), name: '视频专区', routers: '/home/newList'},
      { imgurl: require("./images/menu6.png"), name: '联系我们', routers: '/home/newList'},
    ]
    })
};
</script>