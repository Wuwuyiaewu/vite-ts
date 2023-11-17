

<template>
  <span class="text-large font-600 mr-3"> CRC </span>
  <span @back="onBack" class="text-sm mr-2" style="color: var(--el-text-color-regular)">
    風險控制聯防平台
  </span>
</template>

<script setup lang="ts">
import router from '@/router';

const onBack = () => {
  router.push({ path: '/' })
}
</script>