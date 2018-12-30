import { Component } from '@angular/core';

import * as EXPANSION_OVERVIEW_CODE from './examples/expansion-overview-example/expansion-overview-code';
import * as EXPANSION_ACCORDION_CODE from './examples/expansion-accordion-example/expansion-accordion-code';

@Component({
  selector: 'app-material-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent {
  expansionOverviewCode = EXPANSION_OVERVIEW_CODE;
  expansionAccordionCode = EXPANSION_ACCORDION_CODE;
}
