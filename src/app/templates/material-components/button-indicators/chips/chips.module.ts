import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Chips Components
import { ChipsComponent } from './chips.component';

// Chips Examples
import { ChipsOverviewExample } from './examples/chips-overview-example/chips-overview-example';
import { ChipsAutocompleteExample } from './examples/chips-autocomplete-example/chips-autocomplete-example';
import { ChipsInputExample } from './examples/chips-input-example/chips-input-example';
import { ChipsStackedExample } from './examples/chips-stacked-example/chips-stacked-example';

@NgModule({
  declarations: [
    // Chips Components
    ChipsComponent,

    // Examples
    ChipsOverviewExample,
    ChipsAutocompleteExample,
    ChipsInputExample,
    ChipsStackedExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: ChipsComponent }
    ])
  ]
})
export class ChipsModule {}
