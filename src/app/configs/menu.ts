import { IMenuGroup, IMenuItem } from "../core/pure-interfaces/menu";

/**
 * DEFINE MENUS
 */
const ApplicationMenu: IMenuItem[] = [
  { name: 'Calender',icon: 'today', route: 'app/calender' },
  { name: 'Mail', icon: 'mail', route: 'app/mail' },
  { name: 'Messenger', icon: 'message', route: 'app/messenger' }
];

const PageMenu: IMenuItem[] = [
  {
    name: 'Authentication',
    icon: 'lock',
    children: [
      { name: 'Login', route: 'app/login' },
      { name: 'Register', route: 'app/register' },
      { name: 'Forgot Password', route: 'app/forgot_password' }
    ]
  },
  {
    name: 'Pricing',
    icon: 'attach_money',
    children: [
      { name: 'Pricing 1', route: 'app/pricing_1' },
      { name: 'Pricing 2', route: 'app/pricing_2' },
      { name: 'Pricing 3', route: 'app/pricing_3' }
    ]
  }
];

const TestMenu: IMenuItem[] = [
  {
    name: 'Test',
    icon: 'money',
    children: [
      { 
        name: 'Level 1',
        route: 'app/test_1',
        children: [
          { 
            name: 'Level 2',
            icon: 'money',
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
  }
];
