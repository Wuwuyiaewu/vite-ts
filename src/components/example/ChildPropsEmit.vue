<!-- ChildComponent.vue -->
<template>
  <div>
    <button @click="incrementCounter" >增加計數</button>
    <p>子組件計數: {{ count }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {getFake} from '@/service/_Fake.service'
const { count } = defineProps({
  count: Number,
});
const emit = defineEmits(['increment']);
// 子組件的操作
function incrementCounter() {
  // 呼叫父組件傳遞的 increment 函數，從而觸發父組件的操作
  emit('increment');
  getFake()
}

</script>