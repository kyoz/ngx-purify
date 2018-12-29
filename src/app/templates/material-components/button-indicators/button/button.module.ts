import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Button Components
import { ButtonComponent } from './button.component';

// Button Examples
import { ButtonVarietiesExample } from './examples/button-varieties-example/button-varieties-example';

@NgModule({
  declarations: [
    // Button Components
    ButtonComponent,

    // Examples
    ButtonVarietiesExample
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
