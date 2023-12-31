// import PrimeVueAccordion from "primevue/accordion";
// import PrimeVueAccordionTab from "primevue/accordiontab";
// import PrimeVueAutoComplete from "primevue/autocomplete";
// import PrimeVueButton from "primevue/button";
// import PrimeVueCalendar from "primevue/calendar";
// import PrimeVueCard from "primevue/card";
// import PrimeVueCascadeSelect from "primevue/cascadeselect";
// import PrimeVueCheckbox from "primevue/checkbox";
// import PrimeVueChips from "primevue/chips";
// import PrimeVueColumn from "primevue/column";
// import PrimeVueColumnGroup from "primevue/columngroup";
// import PrimeVuePrimeVue from "primevue/config";
// import PrimeVueDataTable from "primevue/datatable";
// import PrimeVueDropdown from "primevue/dropdown";
// import PrimeVueFileUpload from "primevue/fileupload";
// import PrimeVueGalleria from "primevue/galleria";
// import PrimeVueImage from "primevue/image";
// import PrimeVueInputNumber from "primevue/inputnumber";
// import PrimeVueInputSwitch from "primevue/inputswitch";
// import PrimeVueInputText from "primevue/inputtext";
// import PrimeVueMenu from "primevue/menu";
// import PrimeVueMultiSelect from "primevue/multiselect";
// import PrimeVuePanel from "primevue/panel";
// import PrimeVuePanelMenu from "primevue/panelmenu";
// import PrimeVuePassword from "primevue/password";
// import PrimeVueProgressBar from "primevue/progressbar";
// import PrimeVueProgressSpinner from "primevue/progressspinner";
// import PrimeVueRadioButton from "primevue/radiobutton";
// import PrimeVueScrollPanel from "primevue/scrollpanel";
// import PrimeVueSelectButton from "primevue/selectbutton";
// import PrimeVueSlider from "primevue/slider";
// import PrimeVueTabMenu from "primevue/tabmenu";
// import PrimeVueTextarea from "primevue/textarea";
// import PrimeVueToast from "primevue/toast";
// import PrimeVueToastService from "primevue/toastservice";
// import PrimeVueTooltip from "primevue/tooltip";
// import PrimeVueOverlayPanel from "primevue/overlaypanel";
// declare module "@vue/runtime-core" {
//     interface GlobalComponents {
//       PrimeVueAccordion: typeof PrimeVueAccordion;
//       PrimeVueAccordionTab: typeof PrimeVueAccordionTab;
//       PrimeVueAutoComplete: typeof PrimeVueAutoComplete;
//       PrimeVueButton: typeof PrimeVueButton;
//       PrimeVueCalendar: typeof PrimeVueCalendar;
//       PrimeVueCard: typeof PrimeVueCard;
//       PrimeVueCascadeSelect: typeof PrimeVueCascadeSelect;
//       PrimeVueCheckbox: typeof PrimeVueCheckbox;
//       PrimeVueChips: typeof PrimeVueChips;
//       PrimeVueColumn: typeof PrimeVueColumn;
//       PrimeVueColumnGroup: typeof PrimeVueColumnGroup;
//       PrimeVuePrimeVue: typeof PrimeVuePrimeVue;
//       PrimeVueDataTable: typeof PrimeVueDataTable;
//       PrimeVueDropdown: typeof PrimeVueDropdown;
//       PrimeVueFileUpload: typeof PrimeVueFileUpload;
//       PrimeVueGalleria: typeof PrimeVueGalleria;
//       PrimeVueImage: typeof PrimeVueImage;
//       PrimeVueInputNumber: typeof PrimeVueInputNumber;
//       PrimeVueInputSwitch: typeof PrimeVueInputSwitch;
//       PrimeVueInputText: typeof PrimeVueInputText;
//       PrimeVueMenu: typeof PrimeVueMenu;
//       PrimeVueMultiSelect: typeof PrimeVueMultiSelect;
//       PrimeVuePanel: typeof PrimeVuePanel;
//       PrimeVuePanelMenu: typeof PrimeVuePanelMenu;
//       PrimeVuePassword: typeof PrimeVuePassword;
//       PrimeVueProgressBar: typeof PrimeVueProgressBar;
//       PrimeVueProgressSpinner: typeof PrimeVueProgressSpinner;
//       PrimeVueRadioButton: typeof PrimeVueRadioButton;
//       PrimeVueScrollPanel: typeof PrimeVueScrollPanel;
//       PrimeVueSelectButton: typeof PrimeVueSelectButton;
//       PrimeVueSlider: typeof PrimeVueSlider;
//       PrimeVueTabMenu: typeof PrimeVueTabMenu;
//       PrimeVueTextarea: typeof PrimeVueTextarea;
//       PrimeVueToast: typeof PrimeVueToast;
//       PrimeVueToastService: typeof PrimeVueToastService;
//       PrimeVueTooltip: typeof PrimeVueTooltip;
//       PrimeVueOverlayPanel: typeof PrimeVueOverlayPanel;
//     }
//   }
  

import AutoComplete from "primevue/autocomplete";
import Button from "primevue/button";
import Card from "primevue/card";
import CascadeSelect from "primevue/cascadeselect";
import Checkbox from "primevue/checkbox";
import Chips from "primevue/chips";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import DataTable from "primevue/datatable";
import Dropdown from "primevue/dropdown";
import FileUpload from "primevue/fileupload";
import InputNumber from "primevue/inputnumber";
import InputSwitch from "primevue/inputswitch";
import InputText from "primevue/inputtext";
import Menu from "primevue/menu";
import PanelMenu from "primevue/panelmenu";
import Password from "primevue/password";
import ProgressBar from "primevue/progressbar";
import ProgressSpinner from "primevue/progressspinner";
import RadioButton from "primevue/radiobutton";
import SelectButton from "primevue/selectbutton";
import Slider from "primevue/slider";
import TabMenu from "primevue/tabmenu";
import Toast from "primevue/toast";
import OverlayPanel from "primevue/overlaypanel";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    PrimeAutoComplete: typeof AutoComplete;
    PrimeCascadeSelect: typeof CascadeSelect;
    PrimeButton: typeof Button;
    PrimeCard: typeof Card;
    PrimeCheckbox: typeof Checkbox;
    PrimeColumn: typeof Column;
    PrimeColumnGroup: typeof ColumnGroup;
    PrimeChips: typeof Chips;
    PrimeDataTable: typeof DataTable;
    PrimeDropdown: typeof Dropdown;
    PrimeFileUpload: typeof FileUpload;
    PrimeInputNumber: typeof InputNumber;
    PrimeInputSwitch: typeof InputSwitch;
    PrimeInputText: typeof InputText;
    PrimeMenu: typeof Menu;
    PrimePanelMenu: typeof PanelMenu;
    PrimePassword: typeof Password;
    PrimeProgressBar: typeof ProgressBar;
    PrimeProgressSpinner: typeof ProgressSpinner;
    PrimeRadioButton: typeof RadioButton;
    PrimeSelectButton: typeof SelectButton;
    PrimeSlider: typeof Slider;
    PrimeTabMenu: typeof TabMenu;
    PrimeToast: typeof Toast;
    PrimeOverlayPanel: typeof OverlayPanel;
  }
}
