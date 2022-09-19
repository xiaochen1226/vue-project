<template>
  <van-tabbar route>
    <van-tabbar-item replace to="/home" icon="wap-home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/chat" icon="chat-o" badge="10">
      消息
    </van-tabbar-item>
    <van-tabbar-item replace to="/cart" icon="shopping-cart-o" badge="10">
      购物车
    </van-tabbar-item>
    <van-tabbar-item replace to="/user" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style scoped lang="less"></style>
