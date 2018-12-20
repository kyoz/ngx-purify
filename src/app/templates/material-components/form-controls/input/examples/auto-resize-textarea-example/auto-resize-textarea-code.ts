export const html = `
<mat-form-field class="font-size">
  <mat-label>Font size</mat-label>
  <mat-select #fontSize value="16px" (selectionChange)="triggerResize()">
    <mat-option value="10px">10px</mat-option>
    <mat-option value="12px">12px</mat-option>
    <mat-option value="14px">14px</mat-option>
    <mat-option value="16px">16px</mat-option>
    <mat-option value="18px">18px</mat-option>
    <mat-option value="20px">20px</mat-option>
  </mat-select>
</mat-form-field>

<mat-form-field [style.fontSize]="fontSize.value">
  <mat-label>Autosize textarea</mat-label>
  <textarea matInput
            cdkTextareaAutosize
            #autosize="cdkTextareaAutosize"
            cdkAutosizeMinRows="2"
            cdkAutosizeMaxRows="5"></textarea>
</mat-form-field>
`;

export const ts = `
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Component, NgZone, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';

@Component({
  selector: 'auto-resize-textarea-example',
  templateUrl: './auto-resize-textarea-example.html',
  styleUrls: ['./auto-resize-textarea-example.scss']
})
export class AutoResizeTextareaExample {
  constructor(private ngZone: NgZone) {}

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
}
`;

export const scss = `
.font-size {
  padding-right: 8px;
}
`;
