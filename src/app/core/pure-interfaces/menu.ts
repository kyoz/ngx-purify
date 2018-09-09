export interface IMenuGroup {
  groupName: string,
  menuItems: IMenuItem[]
}

export interface IMenuItem {
  name: string,
  icon?: string,
  route?: string,
  children?: IMenuItem[]
}
