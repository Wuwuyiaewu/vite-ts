<template>
  <el-input
    v-model="input"
    type="text"
    placeholder="Please input"
    :formatter="(value:string) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
    :parser="(value:string) => value.replace(/\$\s?|(,*)/g, '')"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>

<!-- <style scoped lang="scss"></style> -->