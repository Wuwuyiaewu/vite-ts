<script setup lang="ts">
import SideBar from '@/components/SideBarComponent.vue'
</script>
<template>
  <div class="crc">
    <SideBar></SideBar>
  </div>
</template>

<style>
@media (width >=1024px) {
  .crc {
    display: flex;
    min-height: 100vh;
  }
}
</style>
