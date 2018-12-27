import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// GridList Components
import { GridListComponent } from './grid-list.component';

// GridList Examples
import { SimpleGridListExample } from './examples/simple-grid-list-example/simple-grid-list-example';

@NgModule({
  declarations: [
    // GridList Components
    GridListComponent,

    // Examples
    SimpleGridListExample
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