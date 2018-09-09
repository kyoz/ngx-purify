import { IMenuGroup, IMenuItem } from "../core/pure-interfaces/menu";

/**
 * DEFINE MENUS
 */
const ApplicationMenu: IMenuItem[] = [
  { name: 'Calender', route: 'app/calender', children: [] },
  { name: 'Mail', route: 'app/mail', children: [] },
  { name: 'Messenger', route: 'app/messenger', children: [] }
];

const PageMenu: IMenuItem[] = [
  {
    name: 'Authentication',
    children: [
      { name: 'Login', route: 'app/login' },
      { name: 'Register', route: 'app/register' },
      { name: 'Forgot Password', route: 'app/forgot_password' }
    ]
  },
  {
    name: 'Pricing',
    children: [
      { name: 'Pricing 1', route: 'app/pricing_1' },
      { name: 'Pricing 2', route: 'app/pricing_2' },
      { name: 'Pricing 3', route: 'app/pricing_3' }
    ]
  }
];

/**
 * ADD MENUS TO MENU_CONFIGS
 */

export const MENU_CONFIG: IMenuGroup[] = [
  {
    groupName: 'Application',
    data: ApplicationMenu
  },
  {
    groupName: 'Pages',
    data: PageMenu
  }
];
