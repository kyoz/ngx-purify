export const html = `
<mat-icon color="warn">favorite</mat-icon>
<mat-icon color="primary">favorite</mat-icon>
<mat-icon>favorite</mat-icon>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'icon-overview-example',
  templateUrl: './icon-overview-example.html',
  styleUrls: ['./icon-overview-example.scss']
})
export class IconOverviewExample {
}
`;

export const scss = `
mat-icon {
  margin-right: 8px;
}
`;
