export const html = `
<button mat-icon-button [matMenuTriggerFor]="menu">
  <mat-icon>more_vert</mat-icon>
</button>
<mat-menu #menu="matMenu">
  <button mat-menu-item>
    <mat-icon>dialpad</mat-icon>
    <span>Redial</span>
  </button>
  <button mat-menu-item disabled>
    <mat-icon>voicemail</mat-icon>
    <span>Check voicemail</span>
  </button>
  <button mat-menu-item>
    <mat-icon>notifications_off</mat-icon>
    <span>Disable alerts</span>
  </button>
</mat-menu>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'icon-menu-example',
  templateUrl: './icon-menu-example.html',
  styleUrls: ['./icon-menu-example.scss']
})
export class IconMenuExample {
}
`;

export const scss = `
/** No CSS for this example */
`;
