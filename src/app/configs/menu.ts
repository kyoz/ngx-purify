// Interfaces
import { IMenuGroup } from "../core/pure-interfaces/menu";

// Menus
import { ApplicationMenu } from './menus/application';
import { PageMenu } from './menus/page';
import { OtherMenu } from './menus/other';
import { DocumentationMenu } from './menus/documentation';
import { MaterialComponentMenu } from './menus/material-component';

export const MENU_CONFIG: IMenuGroup[] = [
  { groupName: 'APPLICATIONS', menuItems: ApplicationMenu },
  { groupName: 'PAGES', menuItems: PageMenu },
  { groupName: 'MATERIAL COMPONENTS', menuItems: MaterialComponentMenu },
  { groupName: 'DOCUMENTATION', menuItems: DocumentationMenu },
  { groupName: 'OTHERS', menuItems: OtherMenu }
];
