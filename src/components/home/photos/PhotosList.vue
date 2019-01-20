<template>
  <div class="PhotosList">
    <van-tabs v-model="active" @click="tabClick(active)">
      <van-tab v-for="(item, index) in cates" :key="index" :title="item.title" >
      </van-tab>
    </van-tabs>
    <router-link v-for="(img, index) in imageList" :key="index" :to="'/home/PhotosInfo/'+ img.id">
      <img v-lazy="img.img_url" />
    </router-link>
  </div>
</template>

<script>

export default {
  data: () => ({
    active: 0,
    cates: [],
    imageList: []
  }),
  created() {
    this.getAllCategory();
    this.getAllImages();
  },
  methods: {
    
    async getAllCategory() { /* 图片导航栏菜单 */
      const {
        data: { status, message }
      } = await this.$axios.get("/api/getimgcategory");
      if (!status) {
        message.unshift({ title: "全部", id: 0 });
        this.cates = message;
      } else {
        Toast("获取图片导航栏信息失败");
      }
    },

    async getAllImages() { /* 加载所有图片 */
      const {
        data: { satus, message }
      } = await this.$axios.get("/api/getimages/" + this.active);
      if (!status) {
        this.imageList = message;
      } else {
        Toast("获取图片信息失败");
      }
    },

    tabClick(active){ /* 点击导航栏加载图片 */
      // console.log(active)
      this.active = active
      this.getAllImages()
    }
  }
};
</script>

<style lang="scss">
</style>