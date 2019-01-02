import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Autocomplete Components
import { AutocompleteComponent } from './autocomplete.component';

// Autocomplete Examples
import { AutocompleteOverviewExample } from './examples/autocomplete-overview-example/autocomplete-overview-example';
import { AutocompleteDisplayValueExample } from './examples/autocomplete-display-value-example/autocomplete-display-value-example';
import { AutocompleteFilterExample } from './examples/autocomplete-filter-example/autocomplete-filter-example';
import { AutocompleteOptionGroupsExample } from './examples/autocomplete-option-groups-example/autocomplete-option-groups-example';
import { AutocompleteFocusFirstOptionExample } from './examples/autocomplete-focus-first-option-example/autocomplete-focus-first-option-example';

const COMPONENTS = [
  // Autocomplete Components
  AutocompleteComponent,

  // Examples
  AutocompleteOverviewExample,
  AutocompleteDisplayValueExample,
  AutocompleteFilterExample,
  AutocompleteOptionGroupsExample,
  AutocompleteFocusFirstOptionExample
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    SharedModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class AutocompleteModule {}
