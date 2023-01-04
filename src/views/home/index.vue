<template>
  <div class="home">
    <van-search
      v-model="search"
      placeholder="请输入搜索关键词"
      input-align="center"
    />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="item in swipelist"
        :key="item.id"
        @click="toProduct(item.id)"
      >
        <img :src="item.photo_url" />
      </van-swipe-item>
    </van-swipe>
    <van-list
      class="pro-card"
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
    >
      <ProductCard
        @click="toProduct(item.id)"
        v-for="item in list"
        :productlist="item"
        :key="item.id"
      />
    </van-list>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import ProductCard from './components/product-card.vue'
import { userAuthTest } from '@/api/user'
import { prodcutList } from '@/api/product'
import { IProductList } from '@/api/product/type'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Cookies from 'js-cookie'

const router = useRouter()
const store = useStore()

const swipelist = reactive([])
const list: IProductList[] = reactive([])
const search = ref('')
const loading = ref(false)
const finished = ref(false)
const pagination = reactive({ offset: 0, limit: 10 })

let total = 0

const toProduct = (id: number) => {
  router.push({
    name: 'product',
    params: { id }
  })
}

const onLoad = async () => {
  const offset = (pagination.offset + 1) * pagination.limit
  pagination.offset = offset

  await getProductList()
  loading.value = false

  if (offset + pagination.limit >= total) {
    finished.value = true
  }
}

const getProductList = async () => {
  const result = await prodcutList(pagination)
  total = result.total
  list.push(...result.data)
  list.forEach((item, index) => {
    if (index <= 4) {
      swipelist.push(item)
    }
  })
}

const verifyLogin = async () => {
  try {
    await userAuthTest()
  } catch (error) {
    if (error.response.status === 401) {
      Cookies.set('token', '')
      store.dispatch('updateUserAsync', {})
    }
  }
}

onMounted(() => {
  getProductList()
  verifyLogin()
})
</script>

<style scoped lang="less">
.home {
  .my-swipe {
    height: 200px;
    .van-swipe__track {
      .van-swipe-item > img {
        width: 375px;
        height: 200px;
      }
    }
  }
  .pro-card {
    background-color: rgb(237, 221, 221);
    display: flex;
    padding: 0px 5px 20px 5px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
