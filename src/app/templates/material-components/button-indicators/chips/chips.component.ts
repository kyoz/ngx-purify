import { Component } from '@angular/core';

import * as CHIPS_OVERVIEW_CODE from './examples/chips-overview-example/chips-overview-code';
import * as CHIP_AUTOCOMPLETE_CODE from './examples/chips-autocomplete-example/chips-autocomplete-code';
import * as CHIP_INPUT_CODE from './examples/chips-input-example/chips-input-code';
import * as CHIP_STACKED_CODE from './examples/chips-stacked-example/chips-stacked-code';

@Component({
  selector: 'app-material-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {
  chipsOverviewCode = CHIPS_OVERVIEW_CODE;
  chipAutocompleteCode = CHIP_AUTOCOMPLETE_CODE;
  chipInputCode = CHIP_INPUT_CODE;
  chipStackedCode = CHIP_STACKED_CODE;
}
