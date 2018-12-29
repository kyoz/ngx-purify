export const html = `
<button mat-button [matMenuTriggerFor]="menu">Menu</button>
<mat-menu #menu="matMenu">
  <button mat-menu-item>Item 1</button>
  <button mat-menu-item>Item 2</button>
</mat-menu>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'menu-overview-example',
  templateUrl: './menu-overview-example.html',
  styleUrls: ['./menu-overview-example.scss']
})
export class MenuOverviewExample {
}
`;

export const scss = `
/** No CSS for this example */
`;
