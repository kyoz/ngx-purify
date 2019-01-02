import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Chips Components
import { ChipsComponent } from './chips.component';

// Chips Examples
import { ChipsOverviewExample } from './examples/chips-overview-example/chips-overview-example';
import { ChipsAutocompleteExample } from './examples/chips-autocomplete-example/chips-autocomplete-example';
import { ChipsInputExample } from './examples/chips-input-example/chips-input-example';
import { ChipsStackedExample } from './examples/chips-stacked-example/chips-stacked-example';

const COMPONENTS = [
  // Chips Components
  ChipsComponent,

  // Examples
  ChipsOverviewExample,
  ChipsAutocompleteExample,
  ChipsInputExample,
  ChipsStackedExample
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
export class ChipsModule {}
