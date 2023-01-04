<template>
  <van-nav-bar :title="props.title" left-arrow @click-left="onClickLeft" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: String
})

const onClickLeft = () => history.back()
</script>

<style scoped lang="less"></style>
