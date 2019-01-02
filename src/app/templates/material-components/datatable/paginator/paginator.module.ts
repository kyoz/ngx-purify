import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Paginator Components
import { PaginatorComponent } from './paginator.component';

// Paginator Examples
import { PaginatorOverviewExample } from './examples/paginator-overview-example/paginator-overview-example';

const COMPONENTS = [
  // Paginator Components
  PaginatorComponent,

  // Examples
  PaginatorOverviewExample
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
export class PaginatorModule {}
