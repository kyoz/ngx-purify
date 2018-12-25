export const html = `
<mat-toolbar color="primary">
  <mat-toolbar-row>
    <span>Custom Toolbar</span>
  </mat-toolbar-row>

  <mat-toolbar-row>
    <span>Second Line</span>
    <span class="example-spacer"></span>
    <mat-icon class="example-icon">verified_user</mat-icon>
  </mat-toolbar-row>

  <mat-toolbar-row>
    <span>Third Line</span>
    <span class="example-spacer"></span>
    <mat-icon class="example-icon">favorite</mat-icon>
    <mat-icon class="example-icon">delete</mat-icon>
  </mat-toolbar-row>
</mat-toolbar>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'simple-toolbar-example',
  templateUrl: './simple-toolbar-example.html',
  styleUrls: ['./simple-toolbar-example.scss']
})
export class SimpleToolbarExample {
}
`;

export const scss = `
.example-icon {
  padding: 0 14px;
}

.example-spacer {
  flex: 1 1 auto;
}
`;
