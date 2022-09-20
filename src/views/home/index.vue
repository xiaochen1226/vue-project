<template>
  <div class="home">
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      input-align="center"
    />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="imgurl in imglist" :key="imgurl">
        <img :src="imgurl" />
      </van-swipe-item>
    </van-swipe>
    <div class="pro-card">
      <ProductCard
        v-for="item in productlist"
        :productlist="item"
        :key="item.id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductCard from './components/product-card.vue'
export default defineComponent({
  components: {
    ProductCard
  },
  setup() {
    const imglist = [
      'https://gw.alicdn.com/imgextra/i3/O1CN01Am8Sra21Zaice06ax_!!6000000006999-2-tps-1130-500.png_570x10000.jpg_.webp',
      'https://img.alicdn.com/simba/img/TB1lUZLJVXXXXXtXFXXSutbFXXX.jpg',
      'https://img.alicdn.com/imgextra/i4/6000000004047/O1CN01Y8A3Cu1flZaFyZZft_!!6000000004047-0-alimamazszw.jpg',
      'https://img.alicdn.com/simba/img/TB1lUZLJVXXXXXtXFXXSutbFXXX.jpg',
      'https://gw.alicdn.com/imgextra/i3/O1CN01ku1QvU1FdclsstCyR_!!6000000000510-0-tps-520-280.jpg_570x10000Q75.jpg_.webp'
    ]

    const productlist = [
      {
        id: 1,
        name: 'PSO BRAND 基础款纯运动',
        price: '192.2',
        consumption: '7000+',
        url: 'https://s1.ax1x.com/2022/09/20/xP7BTO.jpg',
        tip: '店铺已被142.0万人圈粉'
      },
      {
        id: 2,
        name: '垃圾袋家用手提式',
        price: '11.8',
        consumption: '8000+',
        url: 'https://s1.ax1x.com/2022/09/20/xP7BTO.jpg',
        tip: '店铺已被142.0万人圈粉'
      },
      {
        id: 3,
        name: '垃圾袋家用手提式',
        price: '11.8',
        consumption: '8000+',
        url: 'https://s1.ax1x.com/2022/09/20/xP7BTO.jpg',
        tip: '店铺已被142.0万人圈粉'
      },
      {
        id: 4,
        name: '垃圾袋家用手提式',
        price: '11.8',
        consumption: '8000+',
        url: 'https://s1.ax1x.com/2022/09/20/xP7BTO.jpg',
        tip: '店铺已被142.0万人圈粉'
      },
      {
        id: 5,
        name: '垃圾袋家用手提式',
        price: '11.8',
        consumption: '8000+',
        url: 'https://s1.ax1x.com/2022/09/20/xP7BTO.jpg',
        tip: '店铺已被142.0万人圈粉'
      },
      {
        id: 6,
        name: '垃圾袋家用手提式',
        price: '11.8',
        consumption: '8000+',
        url: 'https://s1.ax1x.com/2022/09/20/xP7BTO.jpg',
        tip: '店铺已被142.0万人圈粉'
      },
      {
        id: 7,
        name: '垃圾袋家用手提式',
        price: '11.8',
        consumption: '8000+',
        url: 'https://s1.ax1x.com/2022/09/20/xP7BTO.jpg',
        tip: '店铺已被142.0万人圈粉'
      }
    ]

    return {
      imglist,
      productlist
    }
  }
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
