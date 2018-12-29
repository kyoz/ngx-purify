export const html = `
<mat-chip-list>
  <mat-chip>One fish</mat-chip>
  <mat-chip>Two fish</mat-chip>
  <mat-chip color="primary" selected>Primary fish</mat-chip>
  <mat-chip color="accent" selected>Accent fish</mat-chip>
</mat-chip-list>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'chips-overview-example',
  templateUrl: './chips-overview-example.html',
  styleUrls: ['./chips-overview-example.scss']
})
export class ChipsOverviewExample {
}
`;

export const scss = `
/** No CSS for this example */
`;
