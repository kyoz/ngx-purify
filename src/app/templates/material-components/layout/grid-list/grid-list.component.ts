import { Component } from '@angular/core';

import * as GRID_LIST_OVERVIEW_CODE from './examples/grid-list-overview-example/grid-list-overview-code';

@Component({
  selector: 'app-material-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent {
  gridListOverviewCode = GRID_LIST_OVERVIEW_CODE;
}
