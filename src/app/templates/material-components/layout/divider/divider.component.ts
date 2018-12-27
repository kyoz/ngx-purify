import { Component } from '@angular/core';

import * as SIMPLE_DIVIDER_CODE from './examples/simple-divider-example/simple-divider-code';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent {
  simpleDividerCode = SIMPLE_DIVIDER_CODE;
}
