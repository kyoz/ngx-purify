import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Sort Header Components
import { SortHeaderComponent } from './sort-header.component';

// Sort Header Examples
import { SortHeaderOverviewExample } from './examples/sort-header-overview-example/sort-header-overview-example';

const COMPONENTS = [
  // Sort Header Components
  SortHeaderComponent,

  // Examples
  SortHeaderOverviewExample
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
export class SortHeaderModule {}
