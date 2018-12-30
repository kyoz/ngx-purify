import { Component } from '@angular/core';

import * as RIPPLES_OVERVIEW_CODE from './examples/ripples-overview-example/ripples-overview-code';

@Component({
  selector: 'app-material-ripples',
  templateUrl: './ripples.component.html',
  styleUrls: ['./ripples.component.scss']
})
export class RipplesComponent {
  ripplesOverviewCode = RIPPLES_OVERVIEW_CODE;
}
