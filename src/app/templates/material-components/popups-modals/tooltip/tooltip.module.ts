import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

// Tooltip Components
import { TooltipComponent } from './tooltip.component';

// Tooltip Examples
import { TooltipOverviewExample } from './examples/tooltip-overview-example/tooltip-overview-example';
import { TooltipPositionExample } from './examples/tooltip-position-example/tooltip-position-example';
import { TooltipDelayExample } from './examples/tooltip-delay-example/tooltip-delay-example';
import { TooltipDisabledExample } from './examples/tooltip-disabled-example/tooltip-disabled-example';
import { TooltipManualExample } from './examples/tooltip-manual-example/tooltip-manual-example';
import { TooltipMessageExample } from './examples/tooltip-message-example/tooltip-message-example';

const COMPONENTS = [
  // Tooltip Components
  TooltipComponent,

  // Examples
  TooltipOverviewExample,
  TooltipPositionExample,
  TooltipDelayExample,
  TooltipDisabledExample,
  TooltipManualExample,
  TooltipMessageExample
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
export class TooltipModule {}
