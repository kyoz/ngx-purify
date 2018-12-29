import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Badge Components
import { BadgeComponent } from './badge.component';

// Badge Examples
import { SimpleBadgeExample } from './examples/simple-badge-example/simple-badge-example';

@NgModule({
  declarations: [
    // Badge Components
    BadgeComponent,

    // Examples
    SimpleBadgeExample
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
