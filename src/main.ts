import './assets/main.scss'
import ElementPlus from 'element-plus'
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import AutoComplete from "primevue/autocomplete";
import Button from "primevue/button";
import Calendar from "primevue/calendar";
import Card from "primevue/card";
import CascadeSelect from "primevue/cascadeselect";
import Checkbox from "primevue/checkbox";
import Chips from "primevue/chips";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import PrimeVue from "primevue/config";
import DataTable from "primevue/datatable";
import Dropdown from "primevue/dropdown";
import FileUpload from "primevue/fileupload";
import Galleria from "primevue/galleria";
import Image from "primevue/image";
import InputNumber from "primevue/inputnumber";
import InputSwitch from "primevue/inputswitch";
import InputText from "primevue/inputtext";
import Menu from "primevue/menu";
import MultiSelect from "primevue/multiselect";
import Panel from "primevue/panel";
import PanelMenu from "primevue/panelmenu";
import Password from "primevue/password";
import ProgressBar from "primevue/progressbar";
import ProgressSpinner from "primevue/progressspinner";
import RadioButton from "primevue/radiobutton";
import ScrollPanel from "primevue/scrollpanel";
import SelectButton from "primevue/selectbutton";
import Slider from "primevue/slider";
import TabMenu from "primevue/tabmenu";
import Textarea from "primevue/textarea";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Tooltip from "primevue/tooltip";
import OverlayPanel from "primevue/overlaypanel";
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as PrimeVueComponents from "@/components/PrimeVue/PrimeVueComponents";
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.component("PrimeAutoComplete", AutoComplete);
app.component("PrimeAccordion", Accordion);
app.component("PrimeAccordionTab", AccordionTab);
app.component("PrimeCard", Card);
app.component("PrimeCalendar", Calendar);
app.component("PrimeCascadeSelect", CascadeSelect);
app.component("PrimePanel", Panel);
app.component("PrimeButton", Button);
app.component("PrimeGalleria", Galleria);
app.component("PrimeProgressBar", ProgressBar);
app.component("PrimeTabMenu", TabMenu);
app.component("PrimeScrollPanel", ScrollPanel);
app.component("PrimeSlider", Slider);
app.component("PrimeSelectButton", SelectButton);
app.component("PrimeMultiSelect", MultiSelect);
app.component("PrimeCheckbox", Checkbox);
app.component("PrimeColumn", Column);
app.component("PrimeColumnGroup", ColumnGroup);
app.component("PrimeChips", Chips);
app.component("PrimeDataTable", DataTable);
app.component("PrimeDropdown", Dropdown);
app.component("PrimeFileUpload", FileUpload);
app.component("PrimeImage", Image);
app.component("PrimeInputNumber", InputNumber);
app.component("PrimeInputSwitch", InputSwitch);
app.component("PrimeInputText", InputText);
app.component("PrimePanelMenu", PanelMenu);
app.component("PrimeRadioButton", RadioButton);
app.component("PrimeTextarea", Textarea);
app.component("PrimeToast", Toast);
app.component("PrimeMenu", Menu);
app.component("PrimePassword", Password);
app.component("PrimeProgressSpinner", ProgressSpinner);
app.component("PrimeOverlayPanel", OverlayPanel);
// register all primeVue components

app.mount('#app')
