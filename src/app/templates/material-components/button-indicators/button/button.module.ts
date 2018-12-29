import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Button Components
import { ButtonComponent } from './button.component';

// Button Examples
import { ButtonOverviewExample } from './examples/button-overview-example/button-overview-example';

@NgModule({
  declarations: [
    // Button Components
    ButtonComponent,

    // Examples
    ButtonOverviewExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: ButtonComponent }
    ])
  ]
})
export class ButtonModule {}
