export const html = `
<mat-tab-group mat-stretch-tabs class="example-stretched-tabs mat-elevation-z4">
  <mat-tab label="First"> Content 1 </mat-tab>
  <mat-tab label="Second"> Content 2 </mat-tab>
  <mat-tab label="Third"> Content 3 </mat-tab>
</mat-tab-group>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'tab-stretched-labels-example',
  templateUrl: './tab-stretched-labels-example.html',
  styleUrls: ['./tab-stretched-labels-example.scss']
})
export class TabStretchedLabelsExample {
}
`;

export const scss = `
.example-stretched-tabs {
  max-width: 800px;
}
`;
