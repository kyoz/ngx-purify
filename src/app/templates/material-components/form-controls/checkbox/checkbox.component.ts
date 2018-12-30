import { Component } from '@angular/core';

import * as CHECKBOX_OVERIVEW_CODE from './examples/checkbox-overview-example/checkbox-overview-code';
import * as CHECKBOX_CONFIGURATION_CODE from './examples/checkbox-configuration-example/checkbox-configuration-code';

@Component({
  selector: 'app-material-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  checkboxOverviewCode = CHECKBOX_OVERIVEW_CODE;
  checkboxConfigurationCode = CHECKBOX_CONFIGURATION_CODE;
}
