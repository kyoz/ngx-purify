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
      { name: 'Analytical', url: '/app/dashboard/analytical' },
      { name: 'Operational', url: '/app/dashboard/operational' },
      { name: 'Strategic', url: '/app/dashboard/strategic' }
    ]
  },
  {
    name: 'E-Commerce', icon: 'shopping_cart', children: [
     { name: 'Front page', url: '/app/e-commerce/front-page' },
     { name: 'Management', url: '/app/e-commerce/management' }
    ]
  },
  { name: 'Calender', icon: 'today', url: '/app/calender' },
  { name: 'Contacts', icon: 'account_box', url: '/app/contacts' },
  { name: 'Mail', icon: 'mail', url: '/app/mail' },
  { name: 'Messenger', icon: 'message', url: '/app/messenger' },
  { name: 'Todo', icon: 'check_box', url: '/app/todo' },
  { name: 'Scrumboard', icon: 'dns', url: '/app/scrumboard' },
  { name: 'File Manager', icon: 'folder', url: '/app/file-manager' },
  { name: 'Search', icon: 'search', url: '/app/search' }
];
