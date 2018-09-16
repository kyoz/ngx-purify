import { IMenuItem } from "../../core/pure-interfaces/menu";

export const MaterialComponentMenu: IMenuItem[] = [
  { 
    name: 'Form Controls', icon: 'layers', children: [
      { name: 'Autocomplete', route: '/material-component/form-control/autocomplete' },
      { name: 'Checkbox', route: '/material-component/form-control/checkbox' },
      { name: 'Datepicker', route: '/material-component/form-control/datepicker' },
      { name: 'Form field', route: '/material-component/form-control/form-field' },
      { name: 'Input', route: '/material-component/form-control/input' },
      { name: 'Radio button', route: '/material-component/form-control/radio-button' },
      { name: 'Select', route: '/material-component/form-control/select' },
      { name: 'Slider', route: '/material-component/form-control/slider' },
      { name: 'Slide Toggle', route: '/material-component/form-control/slide-toggle' }
    ]
  },
  {
    name: 'Navigation', icon: 'layers', children: [
     { name: 'Menu', route: '/material-component/navigation/menu' },
     { name: 'Sidenav', route: '/material-component/navigation/sidenav' },
     { name: 'Toolbar', route: '/material-component/navigation/toolbar' }
    ]
  },
  {
    name: 'Layout', icon: 'layers', children: [
     { name: 'Card', route: '/material-component/layout/card' },
     { name: 'Divider', route: '/material-component/layout/divider' },
     { name: 'Expansion Panel', route: '/material-component/layout/expansion-panel' },
     { name: 'Grid List', route: '/material-component/layout/grid-list' },
     { name: 'List', route: '/material-component/layout/list' },
     { name: 'Stepper', route: '/material-component/layout/stepper' },
     { name: 'Tab', route: '/material-component/layout/tab' },
     { name: 'Tree', route: '/material-component/layout/tree' }
    ]
  },
  {
    name: 'Button & Indicators', icon: 'layers', children: [
     { name: 'Button', route: '/material-component/button-indicators/button' },
     { name: 'Button Toggle', route: '/material-component/button-indicators/button-toggle' },
     { name: 'Badge', route: '/material-component/button-indicators/badge' },
     { name: 'Chips', route: '/material-component/button-indicators/chips' },
     { name: 'Icon', route: '/material-component/button-indicators/icon' },
     { name: 'Progress spinner', route: '/material-component/button-indicators/progress-spinner' },
     { name: 'Progress bar', route: '/material-component/button-indicators/progress-bar' }
    ]
  },
  {
    name: 'Popups & Modals', icon: 'layers', children: [
     { name: 'Bottom Sheet', route: '/material-component/popups-modals/bottom-sheet' },
     { name: 'Dialog', route: '/material-component/popups-modals/dialog' },
     { name: 'Snackbar', route: '/material-component/popups-modals/snackbar' },
     { name: 'Tooltip', route: '/material-component/popups-modals/tooltip' }
    ]
  },
  {
    name: 'Data table', icon: 'layers', children: [
     { name: 'Paginator', route: '/material-component/data-table/paginator' },
     { name: 'Sort header', route: '/material-component/data-table/sort header' },
     { name: 'Table', route: '/material-component/data-table/table' }
    ]
  }
];
