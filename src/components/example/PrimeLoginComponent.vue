<template>
    <form @submit.prevent="onSubmit">
        <label>使用者名稱：</label>
        <input v-model="username" @blur="usernameError && setFieldValue('username', username)" />
        <span v-if="usernameError">{{ usernameError }}</span>
        <label>密碼：</label>
        <input type="password" v-model="password" @blur="passwordError && setFieldValue('password', password)" />
        <span v-if="passwordError">{{ passwordError }}</span>

        <label>確認密碼：</label>
        <input type="password" v-model="confirmPassword"
            @blur="confirmPasswordError && setFieldValue('confirmPassword', confirmPassword)" />
        <span v-if="confirmPasswordError">{{ confirmPasswordError }}</span>

        <label>身分證：</label>
        <input v-model="idCard" @blur="idCardError && setFieldValue('idCard', idCard)" />
        <span v-if="idCardError">{{ idCardError }}</span>

        <label>
            <input type="checkbox" v-model="agreeTerms"
                @change="agreeTermsError && setFieldValue('agreeTerms', agreeTerms)" />
            我同意條款
        </label>
        <span v-if="agreeTermsError">{{ agreeTermsError }}</span>
        <button type="submit">提交</button>
    </form>
</template>
  
  
<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
const { handleSubmit, setFieldValue, meta } = useForm();

// 使用useField函數為每個表單控件創建欄位
const { value: username, errorMessage: usernameError } = useField('username');
const { value: password, errorMessage: passwordError } = useField('password');
const { value: confirmPassword, errorMessage: confirmPasswordError } = useField('confirmPassword');
const { value: idCard, errorMessage: idCardError } = useField('idCard');
const { value: agreeTerms, errorMessage: agreeTermsError } = useField('agreeTerms');

const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    console.log(meta);
    // 在這裡處理表單提交邏輯
});
</script>
  
<style scoped>
.password-input-container {
    position: relative;
}

.password-toggle-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
}
</style>
  