import { Component } from '@angular/core';

import * as SIMPLE_EXPANSION_CODE from './examples/simple-expansion-example/simple-expansion-code';
import * as ACCORDION_EXPANSION_CODE from './examples/accordion-expansion-example/accordion-expansion-code';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent {
  simpleExpansionCode = SIMPLE_EXPANSION_CODE;
  accordionExpansionCode = ACCORDION_EXPANSION_CODE;
}
