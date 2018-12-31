import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Paginator Components
import { PaginatorComponent } from './paginator.component';

// Paginator Examples
import { PaginatorOverviewExample } from './examples/paginator-overview-example/paginator-overview-example';

@NgModule({
  declarations: [
    // Paginator Components
    PaginatorComponent,

    // Examples
    PaginatorOverviewExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: PaginatorComponent }
    ])
  ]
})
export class PaginatorModule {}
