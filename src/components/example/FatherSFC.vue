<!-- ParentComponent.vue -->
<template>
    <div>
        <p>父組件計數: {{ count }}</p>
        <ChildComponent :count="count" @increment="incrementCount" />
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';
import ChildComponent from './ChildPropsEmit.vue';
const count = ref(0);
// 父組件的操作
const incrementCount = () => {
    count.value++;
}
</script>