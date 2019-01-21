<template>
  <div class="photoinfo">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | datefmt }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>
    <hr>

    <!-- 缩略图区域 -->
    <div class="figure">
      <img
        v-for="(item, index) in list"
        :key="index"
        :src="list[index].src"
        alt
        @click="handleImage(index)"
      >
    </div>
    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>

    <comment :id="id"></comment>
  </div>
</template>

<script>
import Comment from "@/components/subcomponents/Comment";
import { ImagePreview } from "vant";

export default {
  data: () => ({
    id: "",
    photoinfo: [],
    list: []
  }),
  created() {
    this.id = this.$route.params.id;
    this.getImages();
    this.getThumImg();
  },
  methods: {
    async getImages() {
      const {
        data: { status, message }
      } = await this.$axios.get("/api/getimageInfo/" + this.id);
      if (!status) {
        this.photoinfo = message;
      }
    },
    async getThumImg() {
      const {
        data: { status, message }
      } = await this.$axios.get("/api/getthumimages/" + this.id);
      if (!status) {
        console.log(message);
        this.list = message;
      }
    },
    /**
     * 预览图片
     * startPosition 代表传进来的索引，利用索引。遍历拿到的数据中的img push到 定义的images数组.
     * 
     * ImagePreview 是 vant提供的一个预览图片的方法
     * 
     */
    handleImage(startPosition) {
      let images = [];
      console.log(startPosition)
      this.list.forEach(item => {
        if (item.src != null) {
          images.push(item.src);
        }
      });
      console.log(images);
      ImagePreview({
        images,
        startPosition
      });
    }
  },
  components: {
    Comment
  }
};
</script>

<style lang="scss">
.photoinfo {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }

  .figure {
    // display: flex;
    display: inline-flex;
    float: left;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100px;
    margin-left: 10px;
    margin-bottom: 10px;
    img {
      flex:1;
      width: 100px;
      height: 100px;
    }
  }
}
</style>