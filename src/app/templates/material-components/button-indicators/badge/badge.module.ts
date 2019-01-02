import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Badge Components
import { BadgeComponent } from './badge.component';

// Badge Examples
import { BadgeOverviewExample } from './examples/badge-overview-example/badge-overview-example';

const COMPONENTS =[
  // Badge Components
  BadgeComponent,

  // Examples
  BadgeOverviewExample
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
export class BadgeModule {}
