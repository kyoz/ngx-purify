export interface MenuGroup {
  groupName: string;
  menuItems: MenuItem[];
}

export interface MenuItem {
  name: string;
  icon?: string;
  url?: string;
  params?: object;
  children?: MenuItem[];
  badge?: number;
  badgeColor?: string;
}
