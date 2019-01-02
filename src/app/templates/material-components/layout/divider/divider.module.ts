import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Divider Components
import { DividerComponent } from './divider.component';

// Divider Examples
import { DividerOverviewExample } from './examples/divider-overview-example/divider-overview-example';

const COMPONENTS = [
  // Divider Components
  DividerComponent,

  // Examples
  DividerOverviewExample
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
export class DividerModule {}
