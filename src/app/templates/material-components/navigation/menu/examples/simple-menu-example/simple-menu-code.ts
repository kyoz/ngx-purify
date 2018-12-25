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
  selector: 'simple-menu-example',
  templateUrl: './simple-menu-example.html',
  styleUrls: ['./simple-menu-example.scss']
})
export class SimpleMenuExample {
}
`;

export const scss = `
/** No CSS for this example */
`;
