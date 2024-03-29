import { MenuItem } from '../../shared/models/menu.model';

/**
 * DEFINE MENUS
 * I do prefer this method to config menu than using class (Ex: new Class('Calendar', 'today', 'app/calendar'))
 * With this method you can provide object correct with Interface. No need to arrange.
 * And with object key, its more easier for us when we have update.
 */

export const ApplicationMenu: MenuItem[] = [
  {
    name: 'MENU.APPLICATIONS.DASHBOARD.TITLE', icon: 'dashboard', children: [
      { name: 'MENU.APPLICATIONS.DASHBOARD.ANALYTICAL', url: '/app/dashboard/analytical' },
      { name: 'MENU.APPLICATIONS.DASHBOARD.OPERATIONAL', url: '/app/dashboard/operational' },
      { name: 'MENU.APPLICATIONS.DASHBOARD.STRATEGIC', url: '/app/dashboard/strategic' }
    ]
  },
  {
    name: 'MENU.APPLICATIONS.E_COMMERCE.TITLE', icon: 'shopping_cart', children: [
     { name: 'MENU.APPLICATIONS.E_COMMERCE.FRONT_PAGE', url: '/app/e-commerce/front-page' },
     { name: 'MENU.APPLICATIONS.E_COMMERCE.MANAGEMENT', url: '/app/e-commerce/management' }
    ]
  },
  { name: 'MENU.APPLICATIONS.CALENDER', icon: 'today', url: '/app/calender', badge: 2, badgeColor: 'primary' },
  { name: 'MENU.APPLICATIONS.CONTACT', icon: 'account_box', url: '/app/contact' },
  { name: 'MENU.APPLICATIONS.MAIL', icon: 'mail', url: '/app/mail', badge: 15 },
  { name: 'MENU.APPLICATIONS.MESSENGER', icon: 'message', url: '/app/messenger' },
  { name: 'Todo', icon: 'assignment_turned_in', url: '/app/todo' },
  { name: 'Scrumboard', icon: 'dns', url: '/app/scrumboard' },
  { name: 'MENU.APPLICATIONS.FILE_MANAGER', icon: 'folder', url: '/app/file-manager' },
  { name: 'MENU.APPLICATIONS.EVENT_LOG', icon: 'view_list', url: '/app/event-log', badge: 6, badgeColor: 'accent' },
  { name: 'MENU.APPLICATIONS.SEARCH', icon: 'search', url: '/app/search' }
];
