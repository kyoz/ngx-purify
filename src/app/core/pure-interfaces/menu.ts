export interface IMenuGroup {
  groupName: string,
  data: IMenuItem[]
}

export interface IMenuItem {
  name: string,
  route?: string,
  children?: IMenuItem[]
}
