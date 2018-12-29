import { Component } from '@angular/core';

import * as SIMPLE_SIDENAV_CODE from './examples/simple-sidenav-example/simple-sidenav-code';
import * as AUTOSIZE_SIDENAV_CODE from './examples/autosize-sidenav-example/autosize-sidenav-code';

@Component({
  selector: 'app-material-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  simpleSidenavCode = SIMPLE_SIDENAV_CODE;
  autosizeSidenavCode = AUTOSIZE_SIDENAV_CODE;
}
