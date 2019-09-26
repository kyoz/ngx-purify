// Interfaces
import { MenuGroup } from '../shared/models/menu.model';

// Menus
import { ApplicationMenu } from './menus/application';
import { PageMenu } from './menus/page';
import { OtherMenu } from './menus/other';
import { DocumentationMenu } from './menus/documentation';
import { MaterialComponentMenu } from './menus/material-component';

export const MENU_CONFIG: MenuGroup[] = [
  { groupName: 'MENU.APPLICATIONS.TITLE', menuItems: ApplicationMenu },
  { groupName: 'MENU.PAGES.TITLE', menuItems: PageMenu },
  { groupName: 'MATERIAL COMPONENTS', menuItems: MaterialComponentMenu },
  { groupName: 'MENU.OTHERS.TITLE', menuItems: OtherMenu },
  { groupName: 'MENU.DOCUMENTATION.TITLE', menuItems: DocumentationMenu }
];
