export const html = `
<mat-form-field class="example-user-input">
  <input matInput placeholder="Show delay (milliseconds)"
         type="number"
         aria-label="Adds a delay between hovering over the button and displaying the tooltip"
         [formControl]="showDelay">
</mat-form-field>

<mat-form-field class="example-user-input">
  <input matInput placeholder="Hide delay (milliseconds)"
         type="number"
         aria-label="Adds a delay between hovering away from the button and hiding the tooltip"
         [formControl]="hideDelay">
</mat-form-field>

<button mat-raised-button
        matTooltip="Info about the action"
        [matTooltipShowDelay]="showDelay.value"
        [matTooltipHideDelay]="hideDelay.value"
        aria-label="Button that displays a tooltip with a customized delay in showing and hiding">
  Action
</button>
`;


export const ts = `
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'tooltip-delay-example',
  templateUrl: './tooltip-delay-example.html',
  styleUrls: ['./tooltip-delay-example.scss']
})
export class TooltipDelayExample {
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);
}
`;

export const scss = `
.example-user-input {
  display: block;
  width: 150px;
}
`;
