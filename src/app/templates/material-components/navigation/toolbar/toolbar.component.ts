import { Component } from '@angular/core';

import * as SIMPLE_TOOLBAR_CODE from './examples/simple-toolbar-example/simple-toolbar-code';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  simpleToolbarCode = SIMPLE_TOOLBAR_CODE;
}
