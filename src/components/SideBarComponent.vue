<script lang="ts" setup>
import {
  Menu as IconMenu,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
}
const handleClose = (key: string, keyPath: string[]) => {
}
</script>

<template>
  <el-aside>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          active-text-color="#ffd04b" background-color="#545c64" text-color="#fff">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <icon-menu />
              </el-icon>
              <span>風險總覽</span>
            </template>
            <el-menu-item index="1-1">監控指標</el-menu-item>
            <el-menu-item index="1-2">告警資訊</el-menu-item>
            <el-menu-item index="1-3">平台通知</el-menu-item>
            <el-menu-item index="1-4">負面新聞</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <icon-menu />
              </el-icon>
              <span>風險通報</span>
            </template>
            <el-menu-item index="2-1">個別申請交易資訊分享</el-menu-item>
            <el-menu-item index="2-2">潛在可疑交易資訊分享</el-menu-item>
            <el-menu-item index="2-3">名單資料庫</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon>
                <icon-menu />
              </el-icon>
              <span>使用者資訊</span>
            </template>
            <el-menu-item index="3-1">權限資訊</el-menu-item>
            <el-menu-item index="3-2">名單查詢紀錄</el-menu-item>
            <el-menu-item index="3-3">下載紀錄</el-menu-item>
            <el-menu-item index="3-4">使用時間紀錄</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <el-icon>
                <icon-menu />
              </el-icon>
              <span>平台管理</span>
            </template>
            <el-menu-item index="4-1">權限審核</el-menu-item>
            <el-menu-item index="4-2">授權紀錄</el-menu-item>
            <el-menu-item index="4-3">通知管理</el-menu-item>
            <el-menu-item index="4-4">名單管理</el-menu-item>
            <el-menu-item index="4-5">帳號管理</el-menu-item>
            <el-menu-item index="4-6">角色管理</el-menu-item>
            <el-menu-item index="4-7">菜單管理</el-menu-item>
          </el-sub-menu>
          <router-link :to="'crc'">
            <el-menu-item index="5">
              <template #title>
                <el-icon>
                  <icon-menu />
                </el-icon>
                Neo4j
              </template>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>
  
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #fff;

  &.router-link-active,
  &.router-link-exact-active {
    color: #ffd04b;

    :deep(.el-menu-item) {
      color: #ffd04b;
    }
  }
}</style>