<template>
    <el-drawer :model-value="props.visible" :show-close="false" :modal="false" :direction="'ltr'"
        :modalClass="'modalclass'">
        <template #header="{ close, titleId, titleClass }">
            <h4 :id="titleId" :class="titleClass">資料詳情</h4>
            <el-button type="danger" @click="emit('confirm', { close }, false)">
                <el-icon class="el-icon--left">
                    <CircleCloseFilled />
                </el-icon>
                Close
            </el-button>
        </template>
        <el-descriptions title="屬性" direction="vertical" :column="1" class="descriptions-box">
            <el-descriptions-item v-for="(value, key) in props.Neo4jValue" :label="`${key} :`" :key="key">{{ value
            }}</el-descriptions-item>
        </el-descriptions>
    </el-drawer>
</template>
<script setup lang="ts">
import { CircleCloseFilled } from '@element-plus/icons-vue'
const props = defineProps({
    Neo4jValue: {
        type: Object, // 這裡的類型應該是您要傳遞的 Neo4jValue 的類型
        required: true // 如果 Neo4jValue 是必需的，可以添加這個選項
    },
    visible: {
        type: Boolean,
        required: true
    }
})
const emit = defineEmits(["confirm"]);
</script>
  
<style scoped lang="scss">
:deep(.el-drawer__Body) {
    background: #000;
}

.descriptions-box {
    :deep(.el-descriptions__table th) {
        font-weight: 700;
        padding: 10px;
        font-size: 1.25rem;
    }

    :deep(.el-descriptions__table td) {
        padding: 10px;
        font-size: 1.125rem;
        color: #000;
    }
}
</style>