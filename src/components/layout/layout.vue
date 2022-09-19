<template>
  <router-view />
  <FooterNav />
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

<style scoped lang="less"></style>
