import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// GridList Components
import { GridListComponent } from './grid-list.component';

// GridList Examples
import { GridListOverviewExample } from './examples/grid-list-overview-example/grid-list-overview-example';

const COMPONENTS = [
  // GridList Components
  GridListComponent,

  // Examples
  GridListOverviewExample
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
export class GridListModule {}