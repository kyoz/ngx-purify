import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// GridList Components
import { GridListComponent } from './grid-list.component';

// GridList Examples
import { GridListOverviewExample } from './examples/grid-list-overview-example/grid-list-overview-example';

@NgModule({
  declarations: [
    // GridList Components
    GridListComponent,

    // Examples
    GridListOverviewExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: GridListComponent}
    ])
  ]
})
export class GridListModule {}