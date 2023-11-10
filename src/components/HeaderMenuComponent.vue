

<template>
  <div aria-label="A complete example of page header">
    <el-page-header @back="onBack" icon="null">
      <template #title>
        <div class="flex items-center">
          <el-avatar class="mr-3" :size="32" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
          <span class="text-large font-600 mr-3"> CRC </span>
          <span class="text-sm mr-2" style="color: var(--el-text-color-regular)">
            風險控制聯防平台
          </span>
        </div>
      </template>
    </el-page-header>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { ElNotification as notify } from 'element-plus'

const onBack = () => {
  router.push({ path: '/' })
}
</script>