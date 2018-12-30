import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// List Components
import { ListComponent } from './list.component';

// List Examples
import { ListOverviewExample } from './examples/list-overview-example/list-overview-example';

@NgModule({
  declarations: [
    // List Components
    ListComponent,

    // Examples
    ListOverviewExample
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
