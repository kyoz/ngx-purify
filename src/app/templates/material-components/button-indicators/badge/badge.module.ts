import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Badge Components
import { BadgeComponent } from './badge.component';

// Badge Examples
import { BadgeOverviewExample } from './examples/badge-overview-example/badge-overview-example';

@NgModule({
  declarations: [
    // Badge Components
    BadgeComponent,

    // Examples
    BadgeOverviewExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: BadgeComponent }
    ])
  ]
})
export class BadgeModule {}
