export interface IMenuGroup {
  groupName: string;
  menuItems: IMenuItem[];
}

export interface IMenuItem {
  name: string;
  icon?: string;
  url?: string;
  params?: object;
  children?: IMenuItem[];
  badge?: number;
  badgeColor?: string;
}
