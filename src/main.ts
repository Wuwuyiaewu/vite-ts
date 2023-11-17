import './assets/main.scss'
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import PrimeVue from "primevue/config";
import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-teal/theme.css";
import PanelMenu from 'primevue/panelmenu';
import Ripple from 'primevue/ripple';
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(PrimeVue, { ripple: true, unstyled: false, pt: {} });
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
/**
 * @description 註冊 primeVueComponents
 */
app.component('PanelMenu', PanelMenu);
app.directive('ripple', Ripple);
app.mount('#app')
