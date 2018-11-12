export interface IMenuGroup {
  groupName: string,
  menuItems: IMenuItem[],
  i18n?: boolean
}

export interface IMenuItem {
  name: string,
  icon?: string,
  url?: string,
  children?: IMenuItem[],
  badge?: number,
  badgeColor?: string,
  i18n?: boolean
}
