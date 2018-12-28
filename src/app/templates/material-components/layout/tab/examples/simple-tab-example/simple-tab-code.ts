export const html = `
<mat-tab-group>
  <mat-tab label="First"> Content 1 </mat-tab>
  <mat-tab label="Second"> Content 2 </mat-tab>
  <mat-tab label="Third"> Content 3 </mat-tab>
</mat-tab-group>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'simple-tab-example',
  templateUrl: './simple-tab-example.html',
  styleUrls: ['./simple-tab-example.scss']
})
export class SimpleTabExample {
}
`;

export const scss = `
/** No CSS for this example */
`;
