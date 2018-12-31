export const html = `
<button mat-raised-button
        matTooltip="Info about the action"
        aria-label="Button that displays a tooltip when focused or hovered over">
  Action
</button>
`;


export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'tooltip-overview-example',
  templateUrl: './tooltip-overview-example.html',
  styleUrls: ['./tooltip-overview-example.scss']
})
export class TooltipOverviewExample {
}
`;

export const scss = `
/** No CSS for this example */
`;
