<template>
  <div class="user-info-page">
    <NavBar title="设置" />
    <van-cell-group>
      <van-cell is-link @click="toUserInfo">
        <template #title>
          <img v-if="user.avatar_url" :src="user.avatar_url" alt="avatar" />
          <div class="no-avatar" v-else></div>
          <span>{{ user.name }}</span>
        </template>
      </van-cell>
      <van-cell title="收货地址" is-link />
    </van-cell-group>

    <div class="loginout" @click="loginout">退出登录</div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/navbar.vue'
import Cookies from 'js-cookie'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

const user = store.state.user

const loginout = () => {
  Cookies.set('token', '')
  store.dispatch('updateUserAsync', {})
  router.push('/user')
}

const toUserInfo = () => {
  router.push('/info')
}
</script>

<style scoped lang="less">
.user-info-page {
  background-color: #f8f8f8;
  height: 100%;
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 5px;
  }
  .no-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: rgb(242, 243, 245);
    float: left;
    margin-right: 5px;
  }
  .loginout {
    margin-top: 20px;
    line-height: 40px;
    height: 40px;
    text-align: center;
    background-color: #fff;

    &:active {
      background-color: rgb(242, 243, 245);
    }
  }
}
</style>
