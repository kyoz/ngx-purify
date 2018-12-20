export const html = `
<form class="example-form">

  <mat-form-field class="example-full-width">
    <input matInput #message maxlength="256" placeholder="Message">
    <mat-hint align="start"><strong>Don't disclose personal info</strong> </mat-hint>
    <mat-hint align="end">{{message.value.length}} / 256</mat-hint>
  </mat-form-field>
  
</form>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'input-with-hint-example',
  templateUrl: './input-with-hint-example.html',
  styleUrls: ['./input-with-hint-example.scss']
})
export class InputWithHintExample {
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
