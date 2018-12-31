export const html = `
<mat-form-field class="example-user-input">
  <input matInput placeholder="Tooltip message" [formControl]="message">
</mat-form-field>

<button mat-raised-button
        [matTooltip]="message.value"
        aria-label="Button that displays a tooltip with a custom message">
  Action
</button>
`;


export const ts = `
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'tooltip-message-example',
  templateUrl: './tooltip-message-example.html',
  styleUrls: ['./tooltip-message-example.scss']
})
export class TooltipMessageExample {
  message = new FormControl('Info about the action');
}
`;

export const scss = `
.example-user-input {
  margin-right: 8px;
}
`;
