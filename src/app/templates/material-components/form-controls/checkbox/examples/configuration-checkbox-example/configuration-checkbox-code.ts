export const html = `
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Configuration Checkbox</h2>

    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="checked">Checked</mat-checkbox>
      <mat-checkbox class="example-margin" [(ngModel)]="indeterminate">Indeterminate</mat-checkbox>
    </section>

    <section class="example-section">
      <label class="example-margin">Align:</label>
      <mat-radio-group [(ngModel)]="labelPosition">
        <mat-radio-button class="example-margin" value="after">After</mat-radio-button>
        <mat-radio-button class="example-margin" value="before">Before</mat-radio-button>
      </mat-radio-group>
    </section>

    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="disabled">Disabled</mat-checkbox>
    </section>
  </mat-card-content>
</mat-card>

<mat-card class="example-result">
  <mat-card-content>
    <h2 class="example-h2">Result</h2>

    <section class="example-section">
      <mat-checkbox
          class="example-margin"
          [(ngModel)]="checked"
          [(indeterminate)]="indeterminate"
          [labelPosition]="labelPosition"
          [disabled]="disabled">
        I'm a checkbox
      </mat-checkbox>
    </section>
  </mat-card-content>
</mat-card>
`;

export const ts = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'configuration-checkbox-example',
  templateUrl: './configuration-checkbox-example.html',
  styleUrls: ['./configuration-checkbox-example.scss']
})
export class ConfigurationCheckboxExample implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  constructor() { }

  ngOnInit(): void { }
}
`;

export const scss = `
.example-h2 {
  margin: 10px;
  font-weight: 400;
}

.example-section {
  display: flex;
  align-content: center;
  align-items: center;
  height: 60px;
}

.example-margin {
  margin: 0 10px;
}

.example-result {
  margin-top: 16px;
}
`;
