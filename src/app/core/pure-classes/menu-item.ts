import { IMenuItem } from "../pure-interfaces/menu";

export class MenuItem {
  name: string;
  icon: string;
  route: string;
  children: IMenuItem[];

  constructor(name: string, icon?: string, route?: string, children?: IMenuItem[]) {
    this.name = name;
    this.icon = icon || null;
    this.route = route || null;
    this.children = children || [];
  }
}