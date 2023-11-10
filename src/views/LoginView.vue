<template>
  <main>
    <el-container>
      <el-header><HeaderMenuComponent/></el-header>
      <el-container>
        <SideBar/>
        <el-main>
        </el-main>
      </el-container>
    </el-container>
  </main>
</template>
<script setup lang="ts">
import HeaderMenuComponent from '@/components/HeaderMenuComponent.vue'
import SideBar from '@/components/SideBarComponent.vue'
</script>