import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

// Checkbox Components
import { CheckboxComponent } from './checkbox.component';

// Checkbox Examples
import { CheckboxOverviewExample } from './examples/checkbox-overview-example/checkbox-overview-example';
import { CheckboxConfigurationExample } from './examples/checkbox-configuration-example/checkbox-configuration-example';

@NgModule({
  declarations: [
    // Checkbox Components
    CheckboxComponent ,

    // Examples
    CheckboxOverviewExample,
    CheckboxConfigurationExample
  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild([
      { path: '', component: CheckboxComponent }
    ])
  ]
})
export class CheckboxModule {}
