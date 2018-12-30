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
  selector: 'tab-header-below-example',
  templateUrl: './tab-header-below-example.html',
  styleUrls: ['./tab-header-below-example.scss']
})
export class TabHeaderBelowExample {
}
`;

export const scss = `
/** No CSS for this example */
`;
