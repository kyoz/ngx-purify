import { IMenuItem } from "../../core/pure-interfaces/menu";

export const OtherMenu: IMenuItem[] = [
  {
    name: 'Multi-level Menu',
    icon: 'sort',
    children: [
      {
        name: 'Level 2',
        children: [
          {
            name: 'Level 3',
            children: [
              {
                name: 'Level 4',
                children: [
                  {
                    name: 'Level 5',
                    url: '/multilevel-menu/level-5'
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
    name: 'Multi-level Menu (With icon)',
    icon: 'list',
    children: [
      {
        name: 'Level 2',
        icon: 'list',
        children: [
          {
            name: 'Level 3',
            icon: 'list',
            children: [
              {
                name: 'Level 4',
                icon: 'list',
                children: [
                  {
                    name: 'Level 5',
                    icon: 'list',
                    url: '/multilevel-menu/level-5'
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
    name: 'Navigation', icon: 'launch', children: [
      { name: 'Normal Route' },
      { name: 'Route with Queries' },
      { name: 'External Link', url: 'https://google.com' }
    ]
  }
];
