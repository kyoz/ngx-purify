export const html = `
<mat-sidenav-container class="example-container">
  <mat-sidenav mode="side" opened>Sidenav content</mat-sidenav>
  <mat-sidenav-content>Main content</mat-sidenav-content>
</mat-sidenav-container>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'simple-sidenav-example',
  templateUrl: './simple-sidenav-example.html',
  styleUrls: ['./simple-sidenav-example.scss']
})
export class SimpleSidenavExample {
}
`;

export const scss = `
.example-container {
  width: 100%;
  height: 200px;
  background: #eee;

  mat-sidenav, mat-sidenav-content {
    padding: 16px;
  }
}
`;
