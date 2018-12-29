import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Button Toggle Components
import { ButtonToggleComponent } from './button-toggle.component';

// Button Toggle Examples
import { SimpleButtonToggleExample } from './examples/simple-button-toggle-example/simple-button-toggle-example';

@NgModule({
  declarations: [
    // Button Toggle Components
    ButtonToggleComponent,

    // Examples
    SimpleButtonToggleExample
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
