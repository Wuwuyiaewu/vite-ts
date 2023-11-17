import axios, { AxiosError } from "axios";
import router from "@/router";
import { ElLoading, ElMessage } from 'element-plus';
const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: import.meta.env.VITE_API_TIMEOUT,
  withCredentials: false,
});
// Add a request interceptor
http.interceptors.request.use(
  function (config) {
    ElLoading.service({
      lock: true,
      text: 'Loading',
      background: 'rgba(0, 0, 0, 0.7)',
    })
    // const applicationStore = useApplicationStore();
    // applicationStore.startLoading();
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    ElMessage.error("Network error");
    console.error("axios - interceptors - request - error:", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // const applicationStore = useApplicationStore();
    // applicationStore.stopLoading();
    ElLoading.service().close();
    return response;
  },
  function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.error("axios - interceptors - response - error:", error);
    ElMessage.error("Network error");
    ElLoading.service().close();
    if (error.response) {
      // TODO: 依據 api 規格與需求，針對 status code 執行對應程式(401、403…等)
      switch (error.response.status) {
        case 401:
          router.push("/login");
          break;
      }
    }
    if (error.code === "ECONNABORTED") {
      // api 請求超時，修改其錯誤訊息
      error.message = "timeout 系統無回應";
    }
    return Promise.reject(error);
  }
);

export default http;
