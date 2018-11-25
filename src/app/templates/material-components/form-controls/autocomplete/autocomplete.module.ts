import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/templates/shared/shared.module';

// Autocomplete Components
import { AutocompleteComponent } from './autocomplete.component';

// Autocomplete Examples
import { SimpleAutocompleteExample } from './simple-autocomplete-example/simple-autocomplete-example';
import { DisplayValueAutocompleteExample } from './display-value-autocomplete-example/display-value-autocomplete-example';
import { FilterAutocompleteExample } from './filter-autocomplete-example/filter-autocomplete-example';
import { OptionGroupsAutocompleteExample } from './option-groups-autocomplete-example/option-groups-autocomplete-example';
import { FocusFirstOptionAutocompleteExample } from './focus-first-option-autocomplete-example/focus-first-option-autocomplete-example';

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
