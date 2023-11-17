<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getData()">Test Axios Request</button>
    <button @click="getMockData()">Test Mock.js Request</button>
    <p>Data received: {{ testData.list }}</p>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import http from "@/service/api/http";
import Mock from "mockjs";

const testData = reactive({
  list: []
});

// Mock data
const tableList = [
  { id: "1234ewqewq" },
  { id: "fe1231wfew" }
];

// Mock endpoints
Mock.mock("api/cockGetList", "get", () => {
  return {
    code: "0",
    data: tableList
  };
});

Mock.mock("/api/add", "post", (params) => {
  const newData = JSON.parse(params.data?.name ?? "");
  newData.id = Mock.Random.guid();
  tableList.push(newData);
  return {
    code: "0",
    message: "success",
    data: tableList
  };
});

// Axios request function
const getData = function () {
  http({
    url: '/api/cockGetList',
    method: 'get'
  }).then((res) => {
    alert('Axios Request successful!');
    testData.list = res.data.data;
  });
};

// Mock.js request function
const getMockData = function () {
  Mock.mock("/api/mockRequest", "get", () => {
    return {
      code: "0",
      data: tableList
    };
  });

  http({
    url: '/api/mockRequest',
    method: 'get'
  }).then((res) => {
    alert('Mock.js Request successful!');
    testData.list = res.data.data;
  });
};
</script>
