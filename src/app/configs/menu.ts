import { IMenuGroup, IMenuItem } from "../core/pure-interfaces/menu";
import { MenuItem } from "../core/pure-classes/menu-item";

/**
 * DEFINE MENUS
 */
const ApplicationMenu: IMenuItem[] = [
  new MenuItem('Calender', 'today', 'app/dashboard/analytical'),
  new MenuItem('Mail', 'mail', 'app/dashboard/operational'),
  new MenuItem('Messenger', 'message', 'app/messenger')
];

const PageMenu: IMenuItem[] = [
  {
    name: 'Authentication',
    icon: 'lock',
    children: [
      {
        name: 'Login', icon: 'lock', route: 'app/login', children: [
          { name: 'Login 1', icon: '' },
          { name: 'Login 2', icon: 'lock' },
          { name: 'Login 3', icon: 'lock' },
        ]
      },
      { name: 'Register', route: 'app/register' },
      { name: 'Forgot Password', route: 'app/forgot_password' }
    ]
  },
  {
    name: 'Pricing',
    icon: 'attach_money',
    children: [
      { name: 'Pricing 1', route: 'https://google.com' },
      { name: 'Pricing 2', route: '/page/auth/login' },
      { name: 'Pricing 3', route: 'app/pricing_3' }
    ]
  }
];

const TestMenu: IMenuItem[] = [
  {
    name: 'Test have icon',
    icon: 'money',
    children: [
      {
        name: 'Level 1',
        route: 'app/test_1',
        icon: 'money',
        children: [
          {
            name: 'Level 2',
            icon: 'money',
            route: 'app/test_2',
            children: [
              {
                name: 'Level 3',
            icon: 'money',
                route: 'app/test_3',
                children: [
                  {
                    name: 'Level 4',
            icon: 'money',
                    route: 'app/test_3',
                    children: [
                      {
                        name: 'Level 5',
            icon: 'money',
                        route: 'app/test_3',
                        children: [
                          {
                            name: 'Level 6',
                            icon: 'money',
                            route: 'app/test_3',
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
    ]
  }
];

const TestMenuNoIcon: IMenuItem[] = [
  {
    name: 'Test no icon',
    children: [
      {
        name: 'Level 1',
        route: 'app/test_1',
        children: [
          {
            name: 'Level 2',
            route: 'app/test_2',
            children: [
              {
                name: 'Level 3',
                route: 'app/test_3',
                children: [
                  {
                    name: 'Level 4',
                    route: 'app/test_3',
                    children: [
                      {
                        name: 'Level 5',
                        route: 'app/test_3',
                        children: [
                          new MenuItem('Level 6','','app/test_3')
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
    ]
  }
];

/**
 * ADD MENUS TO MENU_CONFIGS
 */

export const MENU_CONFIG: IMenuGroup[] = [
  {
    groupName: 'APPLICATIONS',
    menuItems: ApplicationMenu
  },
  {
    groupName: 'PAGES',
    menuItems: PageMenu
  },
  {
    groupName: 'TESTS',
    menuItems: TestMenu
  },
  {
    groupName: 'TEST NO ICON',
    menuItems: TestMenuNoIcon
  }
];
