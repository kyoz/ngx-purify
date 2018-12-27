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
  selector: 'simple-divider-example',
  templateUrl: './simple-divider-example.html',
  styleUrls: ['./simple-divider-example.scss']
})
export class SimpleDividerExample {
}
`;

export const scss = `
/** No CSS for this example */
`;
