import { Component } from '@angular/core';

import * as LIST_OVERVIEW_CODE from './examples/list-overview-example/list-overview-code';

@Component({
  selector: 'app-material-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  listOverviewCode = LIST_OVERVIEW_CODE;
}
