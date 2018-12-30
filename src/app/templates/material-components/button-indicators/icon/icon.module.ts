import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Icon Components
import { IconComponent } from './icon.component';

// Icon Examples
import { IconOverviewExample } from './examples/icon-overview-example/icon-overview-example';

@NgModule({
  declarations: [
    // Icon Components
    IconComponent,

    // Examples
    IconOverviewExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: IconComponent }
    ])
  ]
})
export class IconModule {}
