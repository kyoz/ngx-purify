import { IMenuItem } from "../../core/pure-interfaces/menu";

export const MaterialComponentMenu: IMenuItem[] = [
  { 
    name: 'Form Controls', icon: 'layers', children: [
      { name: 'Autocomplete', url: '/material-component/form-control/autocomplete' },
      { name: 'Checkbox', url: '/material-component/form-control/checkbox' },
      { name: 'Datepicker', url: '/material-component/form-control/datepicker' },
      { name: 'Form field', url: '/material-component/form-control/form-field' },
      { name: 'Input', url: '/material-component/form-control/input' },
      { name: 'Radio button', url: '/material-component/form-control/radio-button' },
      { name: 'Select', url: '/material-component/form-control/select' },
      { name: 'Slider', url: '/material-component/form-control/slider' },
      { name: 'Slide Toggle', url: '/material-component/form-control/slide-toggle' }
    ]
  },
  {
    name: 'Navigation', icon: 'layers', children: [
     { name: 'Menu', url: '/material-component/navigation/menu' },
     { name: 'Sidenav', url: '/material-component/navigation/sidenav' },
     { name: 'Toolbar', url: '/material-component/navigation/toolbar' }
    ]
  },
  {
    name: 'Layout', icon: 'layers', children: [
     { name: 'Card', url: '/material-component/layout/card' },
     { name: 'Divider', url: '/material-component/layout/divider' },
     { name: 'Expansion Panel', url: '/material-component/layout/expansion-panel' },
     { name: 'Grid List', url: '/material-component/layout/grid-list' },
     { name: 'List', url: '/material-component/layout/list' },
     { name: 'Stepper', url: '/material-component/layout/stepper' },
     { name: 'Tab', url: '/material-component/layout/tab' },
     { name: 'Tree', url: '/material-component/layout/tree' }
    ]
  },
  {
    name: 'Button & Indicators', icon: 'layers', children: [
     { name: 'Button', url: '/material-component/button-indicators/button' },
     { name: 'Button Toggle', url: '/material-component/button-indicators/button-toggle' },
     { name: 'Badge', url: '/material-component/button-indicators/badge' },
     { name: 'Chips', url: '/material-component/button-indicators/chips' },
     { name: 'Icon', url: '/material-component/button-indicators/icon' },
     { name: 'Progress spinner', url: '/material-component/button-indicators/progress-spinner' },
     { name: 'Progress bar', url: '/material-component/button-indicators/progress-bar' }
    ]
  },
  {
    name: 'Popups & Modals', icon: 'layers', children: [
     { name: 'Bottom Sheet', url: '/material-component/popups-modals/bottom-sheet' },
     { name: 'Dialog', url: '/material-component/popups-modals/dialog' },
     { name: 'Snackbar', url: '/material-component/popups-modals/snackbar' },
     { name: 'Tooltip', url: '/material-component/popups-modals/tooltip' }
    ]
  },
  {
    name: 'Data table', icon: 'layers', children: [
     { name: 'Paginator', url: '/material-component/data-table/paginator' },
     { name: 'Sort header', url: '/material-component/data-table/sort header' },
     { name: 'Table', url: '/material-component/data-table/table' }
    ]
  }
];
