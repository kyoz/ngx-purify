import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

// Examples Code
import { SIMPLE_AUTOCOMPLETE_CODE } from './simple-autocomplete-example/simple-autocomplete-code';
import { DISPLAY_VALUE_AUTOCOMPLETE_CODE } from './display-value-autocomplete-example/display-value-autocomplete-example-code';
import { FILTER_AUTOCOMPLETE_CODE } from './filter-autocomplete-example/filter-autocomplete-example-code';
import { OPTION_GROUPS_AUTOCOMPLETE_CODE } from './option-groups-autocomplete-example/option-groups-autocomplete-example-code';
import { FOCUS_FIRST_OPTION_AUTOCOMPLETE_CODE } from './focus-first-option-autocomplete-example/focus-first-option-autocomplete-example-code';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteComponent implements OnInit {

  simpleAutoCompleteCode = SIMPLE_AUTOCOMPLETE_CODE;
  displayValueAutocompleteCode = DISPLAY_VALUE_AUTOCOMPLETE_CODE;
  filterAutocompleteCode = FILTER_AUTOCOMPLETE_CODE;
  optionGroupsAutocompleteCode = OPTION_GROUPS_AUTOCOMPLETE_CODE;
  focusFirstOptionAutocompleteCode = FOCUS_FIRST_OPTION_AUTOCOMPLETE_CODE;

  constructor() { }

  ngOnInit() {
  }
}
