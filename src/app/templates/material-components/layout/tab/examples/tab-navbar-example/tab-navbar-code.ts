export const html = `
<button mat-raised-button
        class="example-action-button"
        (click)="toggleBackground()">
  Toggle background
</button>

<nav mat-tab-nav-bar [backgroundColor]="background">
  <a mat-tab-link *ngFor="let link of links"
     (click)="activeLink = link"
     [active]="activeLink == link"> {{link}} </a>
  <a mat-tab-link disabled>Disabled Link</a>
</nav>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'tab-navbar-example',
  templateUrl: './tab-navbar-example.html',
  styleUrls: ['./tab-navbar-example.scss']
})
export class TabNavbarExample {
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background = '';

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }
}
`;

export const scss = `
.example-action-button {
  margin-bottom: 8px;
}
`;
