import { Component } from '@angular/core';

import * as ICON_OVERVIEW_CODE from './examples/icon-overview-example/icon-overview-code';

@Component({
  selector: 'app-material-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  iconOverviewCode = ICON_OVERVIEW_CODE;
}
