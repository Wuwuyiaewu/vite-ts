<script setup lang="ts">
import SideBar from '@/components/SideBarComponent.vue'
import Neo4jDDD from '@/components/example/Neo4jDDD.vue';
</script>
<template>
  <div class="crc">
    <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <SideBar/>
        <el-main>
          <Neo4jDDD/>
        </el-main>
      </el-container>
    </el-container>
  </div>
  </div>
</template>

<style>
</style>
