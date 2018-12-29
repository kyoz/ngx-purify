import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Button Toggle Components
import { ButtonToggleComponent } from './button-toggle.component';

// Button Toggle Examples
import { ButtonToggleOverviewExample } from './examples/button-toggle-overview-example/button-toggle-overview-example';

@NgModule({
  declarations: [
    // Button Toggle Components
    ButtonToggleComponent,

    // Examples
    ButtonToggleOverviewExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: ButtonToggleComponent }
    ])
  ]
})
export class ButtonToggleModule {}
