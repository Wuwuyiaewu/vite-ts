<template>
    <el-descriptions title="資料詳情" direction="vertical" :column="1" class="descriptions-box">
        <el-descriptions-item v-for="(value, key) in props.Neo4jValue" :label="`${key} :`" :key="key">{{ value }}</el-descriptions-item>
    </el-descriptions>
</template>
  
<script setup lang="ts">
import { ref, defineProps } from 'vue'
const props = defineProps({
  Neo4jValue: {
    type: Object, // 這裡的類型應該是您要傳遞的 Neo4jValue 的類型
    required: true // 如果 Neo4jValue 是必需的，可以添加這個選項
  }
})

</script>
  
<style scoped>
.descriptions-box{
    border: 1px solid #000;
}
.descriptions-box >>> .el-descriptions__label{
    font-size: 1.125rem;
    font-weight: 700;
}
.descriptions-box >>> .el-descriptions__content{
    font-weight: 700;
}
</style>
  