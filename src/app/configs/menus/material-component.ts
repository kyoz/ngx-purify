import { IMenuItem } from '../../core/pure-interfaces/menu';

export const MaterialComponentMenu: IMenuItem[] = [
  {
    name: 'Form Controls', icon: 'layers', children: [
      { name: 'Autocomplete', url: '/material-components/form-controls/autocomplete' },
      { name: 'Checkbox', url: '/material-components/form-controls/checkbox' },
      { name: 'Datepicker', url: '/material-components/form-controls/datepicker' },
      { name: 'Form field', url: '/material-components/form-controls/form-field' },
      { name: 'Input', url: '/material-components/form-controls/input' },
      { name: 'Radio button', url: '/material-components/form-controls/radio-button' },
      { name: 'Select', url: '/material-components/form-controls/select' },
      { name: 'Slider', url: '/material-components/form-controls/slider' },
      { name: 'Slide Toggle', url: '/material-components/form-controls/slide-toggle' }
    ]
  },
  {
    name: 'Navigation', icon: 'layers', children: [
     { name: 'Menu', url: '/material-components/navigation/menu' },
     { name: 'Sidenav', url: '/material-components/navigation/sidenav' },
     { name: 'Toolbar', url: '/material-components/navigation/toolbar' }
    ]
  },
  {
    name: 'Layout', icon: 'layers', children: [
     { name: 'Card', url: '/material-components/layout/card' },
     { name: 'Divider', url: '/material-components/layout/divider' },
     { name: 'Expansion Panel', url: '/material-components/layout/expansion-panel' },
     { name: 'Grid List', url: '/material-components/layout/grid-list' },
     { name: 'List', url: '/material-components/layout/list' },
     { name: 'Stepper', url: '/material-components/layout/stepper' },
     { name: 'Tab', url: '/material-components/layout/tab' },
     { name: 'Tree', url: '/material-components/layout/tree' }
    ]
  },
  {
    name: 'Button & Indicators', icon: 'layers', children: [
     { name: 'Button', url: '/material-components/button-indicators/button' },
     { name: 'Button Toggle', url: '/material-components/button-indicators/button-toggle' },
     { name: 'Badge', url: '/material-components/button-indicators/badge' },
     { name: 'Chips', url: '/material-components/button-indicators/chips' },
     { name: 'Icon', url: '/material-components/button-indicators/icon' },
     { name: 'Progress spinner', url: '/material-components/button-indicators/progress-spinner' },
     { name: 'Progress bar', url: '/material-components/button-indicators/progress-bar' },
     { name: 'Ripples', url: '/material-components/button-indicators/ripples' }
    ]
  },
  {
    name: 'Popups & Modals', icon: 'layers', children: [
     { name: 'Bottom Sheet', url: '/material-components/popups-modals/bottom-sheet' },
     { name: 'Dialog', url: '/material-components/popups-modals/dialog' },
     { name: 'Snackbar', url: '/material-components/popups-modals/snackbar' },
     { name: 'Tooltip', url: '/material-components/popups-modals/tooltip' }
    ]
  },
  {
    name: 'Data table', icon: 'layers', children: [
     { name: 'Paginator', url: '/material-components/datatable/paginator' },
     { name: 'Sort header', url: '/material-components/datatable/sort-header' },
     { name: 'Table', url: '/material-components/datatable/table' }
    ]
  }
];
