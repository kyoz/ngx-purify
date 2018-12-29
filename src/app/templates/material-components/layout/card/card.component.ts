import { Component } from '@angular/core';

import * as SIMPLE_CARD_CODE from './examples/simple-card-example/simple-card-code';

@Component({
  selector: 'app-material-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  simpleCardCode = SIMPLE_CARD_CODE;
}
