export const html = `
<button mat-raised-button
        matTooltip="Info about the action"
        [matTooltipDisabled]="disabled.value"
        aria-label="Button that displays a tooltip that can be programatically disabled">
  Action
</button>

<mat-checkbox [formControl]="disabled" class="example-disabled-checkbox">
  Tooltip disabled
</mat-checkbox>
`;


export const ts = `
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'tooltip-disabled-example',
  templateUrl: './tooltip-disabled-example.html',
  styleUrls: ['./tooltip-disabled-example.scss']
})
export class TooltipDisabledExample {
  disabled = new FormControl(false);
}
`;

export const scss = `
.example-disabled-checkbox {
  margin-left: 8px;
}
`;
