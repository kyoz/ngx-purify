import { Component } from '@angular/core';

import * as SIMPLE_MENU_CODE from './examples/simple-menu-example/simple-menu-code';
import * as ICON_MENU_CODE from './examples/icon-menu-example/icon-menu-code';
import * as NESTED_MENU_CODE from './examples/nested-menu-example/nested-menu-code';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  simpleMenuCode = SIMPLE_MENU_CODE;
  iconMenuCode = ICON_MENU_CODE;
  nestedMenuCode = NESTED_MENU_CODE;
}
