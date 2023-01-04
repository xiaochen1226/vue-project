<template>
  <div class="user">
    <div class="header" v-if="user.name">
      <img
        class="avatar"
        v-if="user.avatar_url"
        :src="user.avatar_url"
        alt="avatar"
      />
      <div class="no-avatar" v-else></div>
      <div class="header-content">
        <p class="nickname">{{ user.name }}</p>
        <p class="username">账号名: {{ user.nickname }}</p>
      </div>
      <van-icon class="setting" name="setting-o" @click="toUserInfo" />
    </div>
    <div class="header" v-else>
      <div class="login-tip">
        <span>请先登录</span>
        <van-button round @click="toLogin">登 录</van-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

const user = store.state.user

const toUserInfo = () => {
  router.push('/setting')
}

const toLogin = () => {
  router.push('/login')
}

onMounted(() => {
  console.log(user)
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
    .no-avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: rgb(242, 243, 245);
      float: left;
    }
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
    .login-tip {
      height: 50px;
      margin-top: 15px;
      line-height: 50px;
      > .van-button {
        vertical-align: middle;
        float: right;
      }
    }
  }
}
</style>
