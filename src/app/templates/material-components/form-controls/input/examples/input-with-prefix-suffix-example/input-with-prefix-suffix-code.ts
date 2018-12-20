export const html = `
<form class="example-form">

  <mat-form-field class="example-full-width">
    <span matPrefix>+1 &nbsp;</span>
    <input type="tel" matInput placeholder="Telephone">
    <mat-icon matSuffix>mode_edit</mat-icon>
  </mat-form-field>

</form>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'input-with-prefix-suffix-example',
  templateUrl: './input-with-prefix-suffix-example.html',
  styleUrls: ['./input-with-prefix-suffix-example.scss']
})
export class InputWithPrefixSuffixExample {
}
`;

export const scss = `
.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}

.example-full-width {
  width: 100%;
}
`;
