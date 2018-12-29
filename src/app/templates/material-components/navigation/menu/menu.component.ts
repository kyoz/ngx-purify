import { Component } from '@angular/core';

import * as MENU_OVERVIEW_CODE from './examples/menu-overview-example/menu-overview-code';
import * as MENU_ICON_CODE from './examples/menu-icon-example/menu-icon-code';
import * as MENU_NESTED_CODE from './examples/menu-nested-example/menu-nested-code';

@Component({
  selector: 'app-material-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuOverviewCode = MENU_OVERVIEW_CODE;
  menuIconCode = MENU_ICON_CODE;
  menuNestedCode = MENU_NESTED_CODE;
}
