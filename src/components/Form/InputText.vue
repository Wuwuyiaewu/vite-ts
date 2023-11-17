<template>
    <input :value="modelValue" @input="handleInput" @blur="$emit('blur')" />
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    modelValue: String,
});

const emit = defineEmits(['update:modelValue', 'blur']);

const handleInput = (event: Event) => {
    const inputValue = (event.target as HTMLInputElement)?.value;
    emit('update:modelValue', inputValue);
};
</script>
