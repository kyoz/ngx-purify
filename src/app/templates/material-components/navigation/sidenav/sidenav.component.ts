import { Component } from '@angular/core';

import * as SIDENAV_OVERVIEW_CODE from './examples/sidenav-overview-example/sidenav-overview-code';
import * as SIDENAV_AUTOSIZE_CODE from './examples/sidenav-autosize-example/sidenav-autosize-code';

@Component({
  selector: 'app-material-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  sidenavOverviewCode = SIDENAV_OVERVIEW_CODE;
  sidenavAutosizeCode = SIDENAV_AUTOSIZE_CODE;
}
