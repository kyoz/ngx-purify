import { Component } from '@angular/core';

import * as CARD_OVERVIEW_CODE from './examples/card-overview-example/card-overview-code';

@Component({
  selector: 'app-material-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  cardOverviewCode = CARD_OVERVIEW_CODE;
}
