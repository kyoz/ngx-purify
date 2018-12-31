import { Component } from '@angular/core';

import * as PAGINATOR_OVERVIEW_CODE from './examples/paginator-overview-example/paginator-overview-code';

@Component({
  selector: 'app-material-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  paginatorOverviewCode = PAGINATOR_OVERVIEW_CODE;
}
