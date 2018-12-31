import { Component } from '@angular/core';

import * as TOOLTIP_OVERVIEW_CODE from './examples/tooltip-overview-example/tooltip-overview-code';
import * as TOOLTIP_POSITION_CODE from './examples/tooltip-position-example/tooltip-position-code';
import * as TOOLTIP_DELAY_CODE from './examples/tooltip-delay-example/tooltip-delay-code';
import * as TOOLTIP_DISABLED_CODE from './examples/tooltip-disabled-example/tooltip-disabled-code';
import * as TOOLTIP_MANUAL_CODE from './examples/tooltip-manual-example/tooltip-manual-code';
import * as TOOLTIP_MESSAGE_CODE from './examples/tooltip-message-example/tooltip-message-code';

@Component({
  selector: 'app-material-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  tooltipOverviewCode = TOOLTIP_OVERVIEW_CODE;
  tooltipPositionCode = TOOLTIP_POSITION_CODE;
  tooltipDelayCode = TOOLTIP_DELAY_CODE;
  tooltipDisabledCode = TOOLTIP_DISABLED_CODE;
  tooltipManualCode = TOOLTIP_MANUAL_CODE;
  tooltipMessageCode = TOOLTIP_MESSAGE_CODE;
}
