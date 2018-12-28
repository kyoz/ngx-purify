export const html = `
<mat-tab-group>
  <mat-tab>
    <ng-template mat-tab-label>
      <mat-icon class="example-tab-icon">thumb_up</mat-icon>
      First
    </ng-template>
    Content 1
  </mat-tab>

  <mat-tab>
    <ng-template mat-tab-label>
      <mat-icon class="example-tab-icon">thumb_up</mat-icon>
      Second
    </ng-template>
    Content 2
  </mat-tab>

  <mat-tab>
    <ng-template mat-tab-label>
      <mat-icon class="example-tab-icon">thumb_up</mat-icon>
      Third
    </ng-template>

    Content 3
  </mat-tab>
</mat-tab-group>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'tab-custom-label-example',
  templateUrl: './tab-custom-label-example.html',
  styleUrls: ['./tab-custom-label-example.scss']
})
export class TabCustomLabelExample {
}
`;

export const scss = `
.example-tab-icon {
  margin-right: 8px;
}
`;
