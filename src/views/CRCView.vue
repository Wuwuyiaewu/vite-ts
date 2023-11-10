
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
            <Neo4jDDD />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script setup lang="ts">
import HeaderMenuComponent from '@/components/HeaderMenuComponent.vue'
import SideBar from '@/components/SideBarComponent.vue'
import Neo4jDDD from '@/components/example/Neo4jDDD.vue';
</script>
<style scoped></style>
