export const html = `
<div>
  <span> Mouse over to </span>
  <button mat-button
          (mouseenter)="tooltip.show()"
          aria-label="Button that progamatically shows a tooltip on another button"
          class="example-action-button">
    show
  </button>
  <button mat-button
          (mouseenter)="tooltip.hide()"
          aria-label="Button that progamatically hides a tooltip on another button"
          class="example-action-button">
    hide
  </button>
  <button mat-button
          (mouseenter)="tooltip.toggle()"
          aria-label="Button that progamatically toggles a tooltip on another button to show/hide"
          class="example-action-button">
    toggle show/hide
  </button>
</div>

<button mat-raised-button #tooltip="matTooltip"
        matTooltip="Info about the action"
        matTooltipPosition="right"
        aria-tooltip="Button that displays and hides a tooltip triggered by other buttons">
  Action
</button>
`;


export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'tooltip-manual-example',
  templateUrl: './tooltip-manual-example.html',
  styleUrls: ['./tooltip-manual-example.scss']
})
export class TooltipManualExample {
}
`;

export const scss = `
.example-action-button {
  margin-top: 16px;
}
`;
