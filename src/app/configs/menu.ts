// Interfaces
import { IMenuGroup } from "../core/pure-interfaces/menu";

// Menus
import { ApplicationMenu } from './menus/application';
import { PageMenu } from './menus/page';
import { OtherMenu } from './menus/other';
import { DocumentationMenu } from './menus/documentation';
import { MaterialComponentMenu } from './menus/material-component';

export const MENU_CONFIG: IMenuGroup[] = [
  { groupName: 'MENU.APPLICATIONS.TITLE', menuItems: ApplicationMenu, i18n: true },
  { groupName: 'MENU.PAGES.TITLE', menuItems: PageMenu, i18n: true },
  { groupName: 'MATERIAL COMPONENTS', menuItems: MaterialComponentMenu },
  { groupName: 'MENU.DOCUMENTATION.TITLE', menuItems: DocumentationMenu, i18n: true },
  { groupName: 'OTHERS', menuItems: OtherMenu, i18n: true }
];
