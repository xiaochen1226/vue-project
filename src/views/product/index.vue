<template>
  <div class="product-page">
    <NavBar title="商品" />
    <van-swipe class="product-swipe">
      <van-swipe-item v-for="url in product.photoUrl" :key="url">
        <img :src="url" />
      </van-swipe-item>
    </van-swipe>
    <div class="product-info">
      <div class="product-price">
        <span class="price">￥：{{ product.price }}</span>
        <span class="original">价格：{{ product.original }}</span>
      </div>
      <div class="product-name">{{ product.name }}</div>
    </div>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-action-bar-icon icon="cart-o" text="购物车" />
      <van-action-bar-icon
        :icon="product.is_mark ? 'star' : 'star-o'"
        text="收藏"
        color="#ff5000"
        @click="changeProductMark"
      />
      <van-action-bar-button
        type="warning"
        text="加入购物车"
        @click="addCart"
      />
      <van-action-bar-button type="danger" text="立即购买" />
    </van-action-bar>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from '@vue/runtime-core'
import { useRoute, useRouter } from 'vue-router'
import { productInfo, productToMark } from '@/api/product'
import { addToCart } from '@/api/cart'
import NavBar from '@/components/navbar.vue'
import { Notify } from 'vant'

const route = useRoute()
const router = useRouter()

let product = reactive({})

const getProductInfo = () => {
  productInfo(route.params.id)
    .then((res) => {
      const data = res.data[0]
      product = Object.assign(product, data)
    })
    .catch((error) => {
      if (error.response.status === 401) {
        router.push('/login')
      }
    })
}

const changeProductMark = () => {
  productToMark(route.params.id).then((res) => {
    if (res.status === 200) {
      if (product.is_mark) {
        product.is_mark = 0
      } else {
        product.is_mark = 1
      }
      Notify({ type: 'success', message: res.msg })
    }
  })
}

const addCart = () => {
  addToCart(route.params.id).then((res) => {
    Notify({ type: 'success', message: res.msg })
  })
}

onMounted(() => {
  getProductInfo()
})
</script>

<style scoped lang="less">
.product-page {
  .product-swipe {
    height: 200px;
    .van-swipe__track {
      width: 100%;
      .van-swipe-item > img {
        width: 375px;
        height: 200px;
      }
    }
  }
  .product-info {
    .product-price {
      height: 30px;
      line-height: 30px;
      margin-left: 5px;
      .price {
        color: orange;
        font-size: 18px;
        margin-right: 10px;
      }
      .original {
        color: #6d5f5f;
        font-size: 14px;
        text-decoration: line-through;
      }
    }
    .product-name {
      margin-left: 5px;
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>
