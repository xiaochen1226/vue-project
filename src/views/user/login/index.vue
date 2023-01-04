<template>
  <NavBar title="登录" />
  <div class="login-form">
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
          登录
        </van-button>
      </div>
    </van-form>
    <div class="to-register">
      <span @click="toRegister">没有账号？去注册</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/navbar.vue'
import { onMounted } from 'vue'
import { ref } from 'vue'
import { IFormValues } from './type'
import { userLogin } from '@/api/user'
import Cookies from 'js-cookie'
import { useStore } from 'vuex'
import { Notify } from 'vant'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const userName = ref('')
const passWord = ref('')
let disabled = ref(false)

const onSubmit = (values: IFormValues) => {
  disabled.value = true
  userLogin(values).then((res) => {
    Notify({ type: 'success', message: res.msg })
    Cookies.set('token', res.data.token)
    store.dispatch('updateUserAsync', res.data)
    router.push('/user')
  })
}

const toRegister = () => {
  router.push('/register')
}

onMounted(() => {
  console.log(store.state.user.id)
})
</script>

<style scoped lang="less">
.to-register {
  text-align: center;
  color: blue;
  height: 20px;
}
</style>
