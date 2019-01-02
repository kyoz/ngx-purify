import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// List Components
import { ListComponent } from './list.component';

// List Examples
import { ListOverviewExample } from './examples/list-overview-example/list-overview-example';

const COMPONENTS = [
  // List Components
  ListComponent,

  // Examples
  ListOverviewExample
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
export class ListModule {}
