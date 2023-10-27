<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <main>
    <iframe src="/bloom/index.html" frameborder="0"></iframe>
  </main>
</template>
