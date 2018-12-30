import { Component } from '@angular/core';

// Examples Code
import * as AUTOCOMPLETE_OVERVIEW_CODE from './examples/autocomplete-overview-example/autocomplete-overview-code';
import * as AUTOCOMPLETE_DISPLAY_VALUE_CODE from './examples/autocomplete-display-value-example/autocomplete-display-value-code';
import * as AUTOCOMPLETE_FILTER_CODE from './examples/autocomplete-filter-example/autocomplete-filter-code';
import * as AUTOCOMPLETE_OPTION_GROUPS_CODE from './examples/autocomplete-option-groups-example/autocomplete-option-groups-code';
import * as AUTOCOMPLETE_FOCUS_FIRST_OPTION_CODE from './examples/autocomplete-focus-first-option-example/autocomplete-focus-first-option-code';

@Component({
  selector: 'app-material-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {

  autocompleteOverviewCode = AUTOCOMPLETE_OVERVIEW_CODE;
  autocompleteDisplayValueCode = AUTOCOMPLETE_DISPLAY_VALUE_CODE;
  autocompleteFilterCode = AUTOCOMPLETE_FILTER_CODE;
  autocompleteOptionGroupsCode = AUTOCOMPLETE_OPTION_GROUPS_CODE;
  autocompleteFocusFirstOptionCode = AUTOCOMPLETE_FOCUS_FIRST_OPTION_CODE;
}
