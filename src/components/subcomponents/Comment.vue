<template>
  <div class="comment">
    <h3>发表评论:</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>
    <van-button type="danger" size="large" @click="public">发表评论</van-button>
    <div class="cmt-list">
      <!-- Array.prototype.reverse.call(comments) -->
      <div class="cmt-item" v-for="(item,index) in comments" :key="index">
        <div
          class="cmt-title"
        >第{{index+1}}楼&nbsp;&nbsp;{{item.user_name}}：&nbsp;&nbsp;发表时间：{{item.add_time | datefmt}}</div>
        <div class="cmt-body">{{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}</div>
      </div>
    </div>
    <van-button plain type="danger" size="large" @click="more">{{ len ? '加载更多...' : '兄台，没有了哦'}}</van-button>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  data: () => ({
    msg: "",
    comments: [],
    pageindex: 1,
    len: true
  }),
  props: {
    id: {
      type: String
    }
  },
  created() {
    this.getComments()
  },
  methods: {
    async getComments() {
      const { data: { status, message} } = await this.$axios.get("/api/getcomments/" + this.id + "?pageindex=" + this.pageindex);
      if(!status && message.length !== 0){
        this.comments = this.comments.concat(message);
      }else{
        // 没有数据以后 提示 不在加载。
        return this.len = message.length
      }
      
     
    },

    more() {
      if(!this.len) {
        return
      }
      this.pageindex ++
      this.getComments()
    },

    public() {
      this.$axios.post('/api/postcomment/' + this.id , {content: this.msg}).then( (res) => {
        console.log(res)
          if(!res.data.status) {
            var cmt = {
              user_name: "匿名用户",
              content: this.msg.trim()
            }
            this.comments.unshift(cmt)
            this.msg = ""
            Toast.success(res.data.message);
            
          }else {
            Toast.fail(res.data.message);
          }
      })
    }

  }
};
</script>

<style lang="scss" scoped>
.comment {
  margin: 50px 0;
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>