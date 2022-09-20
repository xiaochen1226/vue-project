<template>
  <div class="layout">
    <router-view class="page" />
    <FooterNav />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FooterNav from './footer-nav.vue'
export default defineComponent({
  components: {
    FooterNav
  }
})
</script>

<style scoped lang="less">
.layout {
  height: 100%;
  .page {
    height: calc(100% - 50px);
    overflow: auto;
  }
}
</style>
