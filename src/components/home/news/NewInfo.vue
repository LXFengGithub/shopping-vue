<template>
  <div>
    <div>{{info.title}}</div>
    <div>{{info.zhaiyao}}</div>
    <div>{{info.add_time}}</div>
    <hr>
    <!-- <img :src="info.img_url" /> -->
    <div>{{info.content}}</div>
    <Comment :id='id'/>
    <routerView />
  </div>
</template>

<script>
import Comment from './Comment'
export default {
  data: () => ({
    id: "",
    info: {}
  }),
  created() {
    // 获取url地址
    this.id = this.$route.params.id

    this.getInfo()
  },
  methods: {
    async getInfo() {
      const {data: {status, message}} = await this.$axios.get('/api/getnew/'+ this.id)
      if(!status){
        // console.log(message)
        this.info = message
      }
    }
  },
  components: {
    Comment
  }
};
</script>

<style  scoped>
</style>