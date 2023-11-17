<template>
  <div class="crc">
    <div class="common-layout">
      <el-container>
        <el-header>
          <HeaderMenuComponent />
        </el-header>
        <el-container>
          <SideBar />
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderMenuComponent from '@/components/HeaderMenuComponent.vue'
import SideBar from '@/components/SideBarComponent.vue'
</script>

<style scoped></style>