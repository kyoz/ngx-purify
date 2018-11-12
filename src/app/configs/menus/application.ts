import { IMenuItem } from "../../core/pure-interfaces/menu";

/**
 * DEFINE MENUS
 * I do prefer this method to config menu than using class (Ex: new Class('Calendar', 'today', 'app/calendar'))
 * With this method you can provide object correct with Interface. No need to arrange.
 * And with object key, its more easier for us when we have update.
 */

export const ApplicationMenu: IMenuItem[] = [
  { 
    name: 'MENU.APPLICATIONS.DASHBOARD.TITLE', icon: 'dashboard', i18n: true, children: [
      { name: 'MENU.APPLICATIONS.DASHBOARD.ANALYTICAL', url: '/app/dashboard/analytical', i18n: true },
      { name: 'MENU.APPLICATIONS.DASHBOARD.OPERATIONAL', url: '/app/dashboard/operational', i18n: true },
      { name: 'MENU.APPLICATIONS.DASHBOARD.STRATEGIC', url: '/app/dashboard/strategic', i18n: true }
    ]
  },
  {
    name: 'E-Commerce', icon: 'shopping_cart', children: [
     { name: 'Front page', url: '/app/e-commerce/front-page' },
     { name: 'Management', url: '/app/e-commerce/management' }
    ]
  },
  { name: 'Calender', icon: 'today', url: '/app/calender', badge: 2 },
  { name: 'Contacts', icon: 'account_box', url: '/app/contacts', badge: 3, badgeColor: 'primary' },
  { name: 'Mail', icon: 'mail', url: '/app/mail', badge: 15, badgeColor: 'accent' },
  { name: 'Messenger', icon: 'message', url: '/app/messenger' },
  { name: 'Todo', icon: 'check_box', url: '/app/todo' },
  { name: 'Scrumboard', icon: 'dns', url: '/app/scrumboard' },
  { name: 'File Manager', icon: 'folder', url: '/app/file-manager' },
  { name: 'Search', icon: 'search', url: '/app/search' }
];
