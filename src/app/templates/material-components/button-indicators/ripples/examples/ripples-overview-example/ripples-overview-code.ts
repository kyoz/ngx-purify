export const html = `
<mat-checkbox [(ngModel)]="centered" class="example-ripple-checkbox">Centered</mat-checkbox>
<mat-checkbox [(ngModel)]="disabled" class="example-ripple-checkbox">Disabled</mat-checkbox>
<mat-checkbox [(ngModel)]="unbounded" class="example-ripple-checkbox">Unbounded</mat-checkbox>

<mat-form-field class="example-ripple-form-field">
  <input matInput [(ngModel)]="radius" type="number" placeholder="Radius">
</mat-form-field>
<mat-form-field class="example-ripple-form-field">
  <input matInput [(ngModel)]="color" type="text" placeholder="Color">
</mat-form-field>


<div class="example-ripple-container mat-elevation-z4"
     matRipple
     [matRippleCentered]="centered"
     [matRippleDisabled]="disabled"
     [matRippleUnbounded]="unbounded"
     [matRippleRadius]="radius"
     [matRippleColor]="color">
  Click me
</div>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'ripples-overview-example',
  templateUrl: './ripples-overview-example.html',
  styleUrls: ['./ripples-overview-example.scss']
})
export class RipplesOverviewExample {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
}
`;

export const scss = `
.example-ripple-container {
  cursor: pointer;
  text-align: center;

  width: 300px;
  height: 300px;
  line-height: 300px;

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  -webkit-user-drag: none;
  -webkit-tap-highlight-color: transparent;
}

/** Styles to make the demo look better. */
.example-ripple-checkbox {
  margin: 6px 12px 6px 0;
}

.example-ripple-form-field {
  margin: 0 12px 0 0;
}
`;
