import { Component } from '@angular/core';

// Examples Code
import * as SIMPLE_AUTOCOMPLETE_CODE from './examples/simple-autocomplete-example/simple-autocomplete-code';
import * as DISPLAY_VALUE_AUTOCOMPLETE_CODE from './examples/display-value-autocomplete-example/display-value-autocomplete-code';
import * as FILTER_AUTOCOMPLETE_CODE from './examples/filter-autocomplete-example/filter-autocomplete-code';
import * as OPTION_GROUPS_AUTOCOMPLETE_CODE from './examples/option-groups-autocomplete-example/option-groups-autocomplete-code';
import * as FOCUS_FIRST_OPTION_AUTOCOMPLETE_CODE from './examples/focus-first-option-autocomplete-example/focus-first-option-autocomplete-code';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {

  simpleAutoCompleteCode = SIMPLE_AUTOCOMPLETE_CODE;
  displayValueAutocompleteCode = DISPLAY_VALUE_AUTOCOMPLETE_CODE;
  filterAutocompleteCode = FILTER_AUTOCOMPLETE_CODE;
  optionGroupsAutocompleteCode = OPTION_GROUPS_AUTOCOMPLETE_CODE;
  focusFirstOptionAutocompleteCode = FOCUS_FIRST_OPTION_AUTOCOMPLETE_CODE;
}
