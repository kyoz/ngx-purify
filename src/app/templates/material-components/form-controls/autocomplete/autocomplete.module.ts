import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Autocomplete Components
import { AutocompleteComponent } from './autocomplete.component';

// Autocomplete Examples
import { SimpleAutocompleteExample } from './examples/simple-autocomplete-example/simple-autocomplete-example';
import { DisplayValueAutocompleteExample } from './examples/display-value-autocomplete-example/display-value-autocomplete-example';
import { FilterAutocompleteExample } from './examples/filter-autocomplete-example/filter-autocomplete-example';
import { OptionGroupsAutocompleteExample } from './examples/option-groups-autocomplete-example/option-groups-autocomplete-example';
import { FocusFirstOptionAutocompleteExample } from './examples/focus-first-option-autocomplete-example/focus-first-option-autocomplete-example';

@NgModule({
  declarations: [
    // Autocomplete Components
    AutocompleteComponent,

    // Examples
    SimpleAutocompleteExample,
    DisplayValueAutocompleteExample,
    FilterAutocompleteExample,
    OptionGroupsAutocompleteExample,
    FocusFirstOptionAutocompleteExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: AutocompleteComponent }
    ])
  ]
})
export class AutocompleteModule {}
