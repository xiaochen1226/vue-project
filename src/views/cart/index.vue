<template>
  <h2 v-if="title.length">{{ title }}</h2>
  <div v-else>
    <NavBar title="购物车" />
    <div class="cartbox" v-for="item in dataList" :key="item.id">
      <van-checkbox
        class="cart-checkbox"
        v-model="item.is_checked"
        @click="changeCartCheck(item.id, item.is_checked)"
      ></van-checkbox>
      <van-card
        :num="item.num"
        :price="item.product.price"
        :origin-price="item.product.original"
        :desc="item.product.summary"
        :title="item.product.name"
        :thumb="item.product.photo_url"
      >
        <template #footer>
          <van-button
            size="mini"
            @click="changeCartNum(item.id, item.num - 1)"
            :disabled="item.num === 1"
            >-1</van-button
          >
          <van-button size="mini" @click="changeCartNum(item.id, item.num + 1)"
            >+1</van-button
          >
        </template>
      </van-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { cartList, updateCartItem } from '@/api/cart'
import NavBar from '@/components/navbar.vue'

let title = ref('')
let dataList = ref([])

const changeCartCheck = async (id, value) => {
  const check = value ? 1 : 0
  await updateCartItem(id, { check })
  await getCartList()
}

const changeCartNum = async (id, num) => {
  await updateCartItem(id, { num })
  await getCartList()
}

const getCartList = async () => {
  try {
    const res = await cartList()
    dataList.value = res.data
  } catch (error) {
    if (error.response.status === 401) {
      title.value = '您当前还未登录'
    }
  }
}

onMounted(() => {
  getCartList()
})
</script>

<style scoped lang="less">
.cartbox {
  position: relative;
  .cart-checkbox {
    position: absolute;
    top: 40px;
    z-index: 999;
  }
  .van-card {
    padding-left: 26px;
  }
}
</style>
