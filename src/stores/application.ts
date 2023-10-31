import { defineStore } from "pinia";

const version: string = JSON.parse(localStorage.getItem("VERSION") ?? '""');
export const useApplicationStore = defineStore({
  id: "application",
  state: () => ({
    error: {
      isShow: false, // 控制是否開啟
      message: "",
    },
    modalErrorMessage: "資料錯誤，請重新操作",
    loadingCounter: 0,
    sideBarFolderControl: false, //控制sidebar的縮放
    contentScrollTop: 0, //控制content的位置
    version: version, //git commit 版號
  }),
  getters: {
    isLoading: (state) => state.loadingCounter > 0,
    errorMessage: (state) => state.error.message,
  },
  actions: {
    sidebarController() {
      this.sideBarFolderControl = !this.sideBarFolderControl;
    },
    openErrorModal(errorMessage: string) {
      this.error.isShow = true;
      this.error.message = errorMessage;
    },
    closeErrorModal() {
      this.error.isShow = false;
    },
    startLoading() {
      this.loadingCounter++;
    },
    stopLoading() {
      if (this.loadingCounter > 0) {
        this.loadingCounter--;
      }
    },
    resetLoading() {
      this.loadingCounter = 0;
    },
    setVersion(version: string) {
      localStorage.setItem("VERSION", JSON.stringify(version));
    },
  },
});
