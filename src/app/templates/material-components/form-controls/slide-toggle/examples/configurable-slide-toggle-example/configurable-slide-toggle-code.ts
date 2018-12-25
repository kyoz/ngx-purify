export const html = `
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Slider configuration</h2>

    <section class="example-section">
      <label class="example-margin">Color:</label>
      <mat-radio-group [(ngModel)]="color">
        <mat-radio-button class="example-margin" value="primary">
          Primary
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="accent">
          Accent
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="warn">
          Warn
        </mat-radio-button>
      </mat-radio-group>
    </section>

    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="checked">Checked</mat-checkbox>
    </section>

    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="disabled">Disabled</mat-checkbox>
    </section>
  </mat-card-content>
</mat-card>

<mat-card class="result">
  <mat-card-content>
    <h2 class="example-h2">Result</h2>

    <section class="example-section">
      <mat-slide-toggle
          class="example-margin"
          [color]="color"
          [checked]="checked"
          [disabled]="disabled">
        Slide me!
      </mat-slide-toggle>
    </section>
  </mat-card-content>
</mat-card>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'configurable-slide-toggle-example',
  templateUrl: './configurable-slide-toggle-example.html',
  styleUrls: ['./configurable-slide-toggle-example.scss']
})
export class ConfigurableSlideToggleExample {
  color = 'accent';
  checked = false;
  disabled = false;
}
`;

export const scss = `
.example-h2 {
  margin: 10px;
}

.example-section {
  display: flex;
  align-content: center;
  align-items: center;
  height: 60px;
}

.example-margin {
  margin: 10px;
}
`;
