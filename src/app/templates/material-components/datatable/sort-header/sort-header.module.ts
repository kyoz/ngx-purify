import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Sort Header Components
import { SortHeaderComponent } from './sort-header.component';

// Sort Header Examples
import { SortHeaderOverviewExample } from './examples/sort-header-overview-example/sort-header-overview-example';

@NgModule({
  declarations: [
    // Sort Header Components
    SortHeaderComponent,

    // Examples
    SortHeaderOverviewExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: SortHeaderComponent }
    ])
  ]
})
export class SortHeaderModule {}
