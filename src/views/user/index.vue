<template>
  <div class="user">
    <div class="header">
      <img class="avatar" :src="imgurl" alt="avatar" />
      <div class="header-content">
        <p class="nickname">xiaochenshuaige</p>
        <p class="username">账号名: 这个没id</p>
      </div>
      <van-icon class="setting" name="setting-o" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const imgurl = 'https://s1.ax1x.com/2022/09/20/xPohvt.jpg'

    return {
      imgurl
    }
  }
})
</script>

<style scoped lang="less">
.user {
  .header {
    width: 375px;
    height: 100px;
    background-color: antiquewhite;
    padding: 10px 20px;
    box-sizing: border-box;
    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      vertical-align: middle;
      float: left;
    }
    .header-content {
      width: 210px;
      padding-left: 10px;
      float: left;
      p {
        margin: 0;
      }
      .nickname {
        font-size: 20px;
        padding-top: 10px;
        font-weight: bold;
      }
      .username {
        margin-top: 10px;
        font-size: 14px;
      }
    }
    .setting {
      padding-top: 10px;
      font-size: 24px;
      width: 24px;
      height: 24px;
      display: block;
      float: right;
    }
  }
}
</style>
