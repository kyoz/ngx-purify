import { Component } from '@angular/core';

import * as SORTING_OVERVIEW_CODE from './examples/sort-header-overview-example/sort-header-overview-code';

@Component({
  selector: 'app-material-sort-header',
  templateUrl: './sort-header.component.html',
  styleUrls: ['./sort-header.component.scss']
})
export class SortHeaderComponent {
  sortingOverviewCode = SORTING_OVERVIEW_CODE;
}
