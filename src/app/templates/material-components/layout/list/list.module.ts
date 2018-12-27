import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// List Components
import { ListComponent } from './list.component';

// List Examples
import { SimpleListExample } from './examples/simple-list-example/simple-list-example';

@NgModule({
  declarations: [
    // List Components
    ListComponent,

    // Examples
    SimpleListExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: ListComponent}
    ])
  ]
})
export class ListModule {}
