export const html = `
<mat-list>
  <mat-list-item>Item 1</mat-list-item>
  <mat-divider></mat-divider>
  <mat-list-item>Item 2</mat-list-item>
  <mat-divider></mat-divider>
  <mat-list-item>Item 3</mat-list-item>
</mat-list>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'divider-overview-example',
  templateUrl: './divider-overview-example.html',
  styleUrls: ['./divider-overview-example.scss']
})
export class DividerOverviewExample {
}
`;

export const scss = `
/** No CSS for this example */
`;
