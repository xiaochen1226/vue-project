<template>
  <NavBar title="注册" />
  <div class="register-form">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="userName"
          name="name"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="nickName"
          name="nickname"
          label="昵称"
          placeholder="请输入昵称"
          :rules="[{ required: true, message: '请填写昵称' }]"
        />
        <van-field
          v-model="passWord"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button
          round
          block
          type="primary"
          native-type="submit"
          :disabled="disabled"
        >
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/navbar.vue'
import { ref } from 'vue'
import { IFormValues } from './type'
import { userRegister } from '@/api/user'
import { Notify } from 'vant'
import { useRouter } from 'vue-router'

const router = useRouter()

const userName = ref('')
const nickName = ref('')
const passWord = ref('')
let disabled = ref(false)

const onSubmit = (values: IFormValues) => {
  disabled.value = true
  userRegister(values).then((res) => {
    Notify({ type: 'success', message: res.msg + '，正在跳转登录。。。' })
    router.push('/login')
  })
}
</script>

<style scoped lang="less"></style>
