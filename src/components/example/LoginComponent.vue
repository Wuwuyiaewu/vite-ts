<template>
    <h1>Element Plus + vee-validate + 登入</h1>

    <el-form @submit="onSubmit">
        <el-form-item :error="errors.email" label="Email" required>
            <el-input placeholder="Email Address" v-bind="email" />
        </el-form-item>

        <el-form-item :error="errors.fullName" label="Full name" required>
            <el-input placeholder="Full name" v-bind="fullName" />
        </el-form-item>

        <el-form-item :error="errors.password" label="Password" required>
            <el-input placeholder="Password" v-bind="password" />
        </el-form-item>

        <el-form-item :error="errors.passwordConfirm" label="Password confirmation" required>
            <el-input placeholder="Confirm password" v-bind="passwordConfirm" />
        </el-form-item>

        <el-form-item :error="errors.type" label="Type" required>
            <el-select v-bind="type" class="m-2" placeholder="Select" label="Type">
                <el-option v-for="item in options" :key="item" :label="item" :value="item" />
            </el-select>
        </el-form-item>

        <el-form-item :error="errors.terms">
            <el-checkbox v-bind="terms"> Agree to terms and conditions </el-checkbox>
        </el-form-item>

        <div>
            <el-button type="primary" native-type="submit">Submit</el-button>
            <el-button type="default" native-type="button" @click="resetForm()">
                Reset
            </el-button>
        </div>
    </el-form>
</template>
  
<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as yup from 'yup';
const schema = yup.object({
    email: yup.string().required().email().label('Email address'),
    fullName: yup.string().required().label('Full name'),
    password: yup.string().required().min(6).label('Password'),
    passwordConfirm: yup
        .string()
        .required()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .label('Password confirmation'),
    terms: yup
        .boolean()
        .required()
        .isTrue('You must agree to terms and conditions')
        .label('terms agreement'),
    type: yup.string().required().label('Account type'),
});

const { defineComponentBinds, handleSubmit, resetForm, errors } = useForm({
    validationSchema: schema,
    initialValues: {
        terms: false,
        email: "",
        fullName: "",
        password: "",
        passwordConfirm: "",
        type: "",
    },
});

const elPlusConfig = (state) => ({
    props: {
        validateEvent: true,
    },
});
const elCheckPlusConfig = (state) => ({
    props: {
        modelValue: state.value,
        "onUpdate:modelValue": state.update,
        onBlur: state.blur,
        validateEvent: true,
    },
});
const fullName = defineComponentBinds('fullName', elPlusConfig);
const email = defineComponentBinds('email', elPlusConfig);
const password = defineComponentBinds('password', elPlusConfig);
const passwordConfirm = defineComponentBinds('passwordConfirm', elPlusConfig);
const terms = defineComponentBinds('terms', elCheckPlusConfig);
const type = defineComponentBinds('type', elPlusConfig);

const onSubmit = handleSubmit((values) => {
    console.log('Submitted with', values);
});

const options = ['Enterprise', 'Pro', 'Freelance'];
</script>

<style>
body {
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
        Microsoft YaHei, SimSun, sans-serif;
}
</style>
