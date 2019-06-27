import { IMenuItem } from '../../core/pure-interfaces/menu';

export const OtherMenu: IMenuItem[] = [
  {
    name: 'MENU.OTHERS.MULTI_LEVEL_MENU.TITLE',
    icon: 'sort',
    children: [
      {
        name: 'MENU.OTHERS.MULTI_LEVEL_MENU.LEVEL_2',
        children: [
          {
            name: 'MENU.OTHERS.MULTI_LEVEL_MENU.LEVEL_3',
            children: [
              {
                name: 'MENU.OTHERS.MULTI_LEVEL_MENU.LEVEL_4',
                children: [
                  {
                    name: 'MENU.OTHERS.MULTI_LEVEL_MENU.LEVEL_5',
                    url: '/others/multi-level/level-5'
                  }
                ]
              }
            ]
          }
        ]
      },
    ]
  },
  {
    name: 'MENU.OTHERS.MULTI_LEVEL_MENU_WITH_ICON.TITLE',
    icon: 'list',
    children: [
      {
        name: 'MENU.OTHERS.MULTI_LEVEL_MENU_WITH_ICON.LEVEL_2',
        icon: 'list',
        children: [
          {
            name: 'MENU.OTHERS.MULTI_LEVEL_MENU_WITH_ICON.LEVEL_3',
            icon: 'list',
            children: [
              {
                name: 'MENU.OTHERS.MULTI_LEVEL_MENU_WITH_ICON.LEVEL_4',
                icon: 'list',
                children: [
                  {
                    name: 'MENU.OTHERS.MULTI_LEVEL_MENU_WITH_ICON.LEVEL_5',
                    icon: 'list',
                    url: '/others/multi-level/level-5-with-icon'
                  }
                ]
              }
            ]
          }
        ]
      },
    ]
  },
  {
    name: 'MENU.OTHERS.NAVIGATION.TITLE', icon: 'launch', children: [
      { name: 'MENU.OTHERS.NAVIGATION.NORMAL_ROUTE', url: '/others/normal-route' },
      { name: 'MENU.OTHERS.NAVIGATION.ROUTE_WITH_QUERIES', url: '/others/route-with-queries' },
      { name: 'MENU.OTHERS.NAVIGATION.EXTERNAL_LINK', url: 'https://google.com' }
    ]
  }
];