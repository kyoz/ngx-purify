export const html = `
<mat-tab-group headerPosition="below">
  <mat-tab label="First"> Content 1 </mat-tab>
  <mat-tab label="Second"> Content 2 </mat-tab>
  <mat-tab label="Third"> Content 3 </mat-tab>
</mat-tab-group>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'header-below-tab-example',
  templateUrl: './header-below-tab-example.html',
  styleUrls: ['./header-below-tab-example.scss']
})
export class HeaderBelowTabExample {
}
`;

export const scss = `
/** No CSS for this example */
`;
