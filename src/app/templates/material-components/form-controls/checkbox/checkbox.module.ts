import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Checkbox Components
import { CheckboxComponent } from './checkbox.component';

// Checkbox Examples
import { CheckboxOverviewExample } from './examples/checkbox-overview-example/checkbox-overview-example';
import { CheckboxConfigurationExample } from './examples/checkbox-configuration-example/checkbox-configuration-example';

const COMPONENTS = [
  // Checkbox Components
  CheckboxComponent ,

  // Examples
  CheckboxOverviewExample,
  CheckboxConfigurationExample
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
export class CheckboxModule {}
