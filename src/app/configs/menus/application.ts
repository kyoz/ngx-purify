import { IMenuItem } from "../../core/pure-interfaces/menu";

/**
 * DEFINE MENUS
 * I do prefer this method to config menu than using class (Ex: new Class('Calendar', 'today', 'app/calendar'))
 * With this method you can provide object correct with Interface. No need to arrange.
 * And with object key, its more easier for us when we have update.
 */

export const ApplicationMenu: IMenuItem[] = [
  { 
    name: 'Dashboard', icon: 'dashboard', children: [
      { name: 'Analytical', route: '/app/dashboard/analytical' },
      { name: 'Operational', route: '/app/dashboard/operational' },
      { name: 'Strategic', route: '/app/dashboard/strategic' }
    ]
  },
  {
    name: 'E-Commerce', icon: 'shopping_cart', children: [
     { name: 'Front page', route: '/app/e-commerce/front-page' },
     { name: 'Management', route: '/app/e-commerce/management' }
    ]
  },
  { name: 'Calender', icon: 'today', route: '/app/calender' },
  { name: 'Contacts', icon: 'account_box', route: '/app/contacts' },
  { name: 'Mail', icon: 'mail', route: '/app/mail' },
  { name: 'Messenger', icon: 'message', route: '/app/messenger' },
  { name: 'Todo', icon: 'check_box', route: '/app/todo' },
  { name: 'Scrumboard', icon: 'dns', route: '/app/scrumboard' },
  { name: 'File Manager', icon: 'folder', route: '/app/file-manager' },
  { name: 'Search', icon: 'search', route: '/app/search' }
];
