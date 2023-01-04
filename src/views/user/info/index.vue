<template>
  <div class="info-page">
    <NavBar title="个人信息" />
    <div class="avatar-con">
      <div class="upload-con">
        <img :src="user.avatar_url" alt="" v-if="user.avatar_url" />
        <van-uploader :after-read="afterRead" v-else />
      </div>
    </div>
    <van-cell-group>
      <van-cell is-link>
        <template #title>
          <span class="label">淘宝账号</span>
          <span>{{ user.name }}</span>
        </template>
      </van-cell>
      <van-cell is-link>
        <template #title>
          <span class="label">淘宝昵称</span>
          <span>{{ user.nickname }}</span>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/navbar.vue'
import { userUploadAvatar } from '@/api/user'
import { useStore } from 'vuex'
import { Notify } from 'vant'
const store = useStore()

const user = store.state.user

const afterRead = async (file) => {
  const avatarFile = file.file
  avatarFile.mimetype = avatarFile.type
  avatarFile.filename = avatarFile.name

  const param = new FormData()
  param.append('avatar', avatarFile)

  const result = await userUploadAvatar(param)
  console.log(result)

  store.dispatch('updateUserAvatar', result.data.avatar_url)
  Notify({ type: 'success', message: result.msg })
}
</script>

<style scoped lang="less">
.info-page {
  height: 100%;
  background-color: #f8f8f8;
  .avatar-con {
    height: 200px;
    background-color: #fff;
    padding-top: 60px;
    box-sizing: border-box;
    text-align: center;
    .upload-con {
      width: 80px;
      height: 80px;
      display: inline-block;
      border-radius: 50%;
      overflow: hidden;
      > img {
        width: 80px;
        height: 80px;
      }
    }
  }
  .van-cell {
    .label {
      font-weight: bold;
      margin-right: 40px;
    }
  }
}
</style>
