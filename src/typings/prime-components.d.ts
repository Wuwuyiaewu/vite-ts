import {
    Accordion,
    AccordionTab,
    AutoComplete,
    Button,
    Calendar,
    Card,
    CascadeSelect,
    Checkbox,
    Chips,
    Column,
    ColumnGroup,
    PrimeVue as PrimeVueConfig,
    DataTable,
    Dropdown,
    FileUpload,
    Galleria,
    Image,
    InputNumber,
    InputSwitch,
    InputText,
    Menu,
    MultiSelect,
    Panel,
    PanelMenu,
    Password,
    ProgressBar,
    ProgressSpinner,
    RadioButton,
    ScrollPanel,
    SelectButton,
    Slider,
    TabMenu,
    Textarea,
    Toast,
    ToastService,
    Tooltip,
    OverlayPanel,
  } from "primevue";
  
  declare module "@vue/runtime-core" {
    export interface GlobalComponents {
      PrimeVueAccordion: typeof Accordion;
      PrimeVueAccordionTab: typeof AccordionTab;
      PrimeVueAutoComplete: typeof AutoComplete;
      PrimeVueButton: typeof Button;
      PrimeVueCalendar: typeof Calendar;
      PrimeVueCard: typeof Card;
      PrimeVueCascadeSelect: typeof CascadeSelect;
      PrimeVueCheckbox: typeof Checkbox;
      PrimeVueChips: typeof Chips;
      PrimeVueColumn: typeof Column;
      PrimeVueColumnGroup: typeof ColumnGroup;
      PrimeVuePrimeVue: typeof PrimeVueConfig;
      PrimeVueDataTable: typeof DataTable;
      PrimeVueDropdown: typeof Dropdown;
      PrimeVueFileUpload: typeof FileUpload;
      PrimeVueGalleria: typeof Galleria;
      PrimeVueImage: typeof Image;
      PrimeVueInputNumber: typeof InputNumber;
      PrimeVueInputSwitch: typeof InputSwitch;
      PrimeVueInputText: typeof InputText;
      PrimeVueMenu: typeof Menu;
      PrimeVueMultiSelect: typeof MultiSelect;
      PrimeVuePanel: typeof Panel;
      PrimeVuePanelMenu: typeof PanelMenu;
      PrimeVuePassword: typeof Password;
      PrimeVueProgressBar: typeof ProgressBar;
      PrimeVueProgressSpinner: typeof ProgressSpinner;
      PrimeVueRadioButton: typeof RadioButton;
      PrimeVueScrollPanel: typeof ScrollPanel;
      PrimeVueSelectButton: typeof SelectButton;
      PrimeVueSlider: typeof Slider;
      PrimeVueTabMenu: typeof TabMenu;
      PrimeVueTextarea: typeof Textarea;
      PrimeVueToast: typeof Toast;
      PrimeVueToastService: typeof ToastService;
      PrimeVueTooltip: typeof Tooltip;
      PrimeVueOverlayPanel: typeof OverlayPanel;
    }
  }
  