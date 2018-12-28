export const html = `
<mat-tab-group dynamicHeight>
  <mat-tab label="Short tab">
    <div class="example-small-box mat-elevation-z4">
      Small content
    </div>
  </mat-tab>
  <mat-tab label="Long tab">
    <div class="example-large-box mat-elevation-z4">
      Large content
    </div>
  </mat-tab>
</mat-tab-group>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'tab-dynamic-height-example',
  templateUrl: './tab-dynamic-height-example.html',
  styleUrls: ['./tab-dynamic-height-example.scss']
})
export class TabDynamicHeightExample {
}
`;

export const scss = `
.example-small-box, .example-large-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
}

.example-small-box {
  height: 100px;
  width: 100px;
}

.example-large-box {
  height: 300px;
  width: 300px;
}
`;
