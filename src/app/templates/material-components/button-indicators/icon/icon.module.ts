import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Icon Components
import { IconComponent } from './icon.component';

// Icon Examples
import { IconOverviewExample } from './examples/icon-overview-example/icon-overview-example';

const COMPONENTS = [
  // Icon Components
  IconComponent,

  // Examples
  IconOverviewExample
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
export class IconModule {}
