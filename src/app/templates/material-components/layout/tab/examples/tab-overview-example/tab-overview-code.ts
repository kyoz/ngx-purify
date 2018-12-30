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
  selector: 'tab-overview-example',
  templateUrl: './tab-overview-example.html',
  styleUrls: ['./tab-overview-example.scss']
})
export class TabOverviewExample {
}
`;

export const scss = `
/** No CSS for this example */
`;
