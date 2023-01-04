<template>
  <div class="product-card">
    <img class="product-img" :src="props.productlist.photo_url" alt="" />
    <div class="content">
      <p class="product-name">{{ productlist.name }}</p>
      <p class="product-content">
        <span class="product-price">￥{{ productlist.price }}</span>
        <!-- <span class="product-cons">{{ productlist.consumption }}人付款</span> -->
      </p>
      <p class="product-tip">{{ productlist.tag }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  productlist: Object
})
</script>

<style scoped lang="less">
.product-card {
  width: 180px;
  margin-top: 6px;
  background-color: white;
  .product-img {
    width: 100%;
    height: 180px;
  }
  .content {
    height: 68px;
    > p {
      margin: 0;
    }
    .product-name {
      font-size: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .product-content {
      .product-price {
        color: red;
        font-size: 20px;
      }
      .product-cons {
        margin-left: 5px;
        font-size: 14px;
        color: gray;
      }
    }
    .product-tip {
      margin-top: 4px;
      font-size: 14px;
      color: orange;
    }
  }
}
</style>
