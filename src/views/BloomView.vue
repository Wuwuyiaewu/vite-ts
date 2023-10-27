<script setup lang="ts">
import BloomComponent from '@/components/BloomComponent.vue'
</script>
<template>
  <div class="about">
    <h1>This is an Bloom page</h1>
    <a href="/bloom/index.html">go to bloom</a>
    <BloomComponent msg=""></BloomComponent>
  </div>
</template>

<style>
@media (width >=1024px) {
  .about {
    display: flex;
    align-items: center;
    min-height: 100vh;
  }
}
</style>
