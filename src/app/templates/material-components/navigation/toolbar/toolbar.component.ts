import { Component } from '@angular/core';

import * as TOOLBAR_OVERVIEW_CODE from './examples/toolbar-overview-example/toolbar-overview-code';

@Component({
  selector: 'app-material-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  toolbarOverviewCode = TOOLBAR_OVERVIEW_CODE;
}
