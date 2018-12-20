export const html = `
<form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput placeholder="Favorite food" value="Sushi">
  </mat-form-field>

  <mat-form-field class="example-full-width">
    <textarea matInput placeholder="Leave a comment"></textarea>
  </mat-form-field>
</form>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'simple-input-example',
  templateUrl: './simple-input-example.html',
  styleUrls: ['./simple-input-example.scss']
})
export class SimpleInputExample {
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
