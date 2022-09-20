<template>
  <div class="product-card">
    <img class="product-img" :src="productlist.url" alt="" />
    <div class="content">
      <p class="product-name">{{ productlist.name }}</p>
      <p class="product-content">
        <span class="product-price">￥{{ productlist.price }}</span>
        <span class="product-cons">{{ productlist.consumption }}人付款</span>
      </p>
      <p class="product-tip">{{ productlist.tip }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    productlist: {
      default: () => []
    }
  }
})
</script>

<style scoped lang="less">
.product-card {
  width: 180px;
  margin-top: 6px;
  background-color: white;
  .product-img {
    width: 100%;
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
