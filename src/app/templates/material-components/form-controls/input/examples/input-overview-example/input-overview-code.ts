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
  selector: 'input-overview-example',
  templateUrl: './input-overview-example.html',
  styleUrls: ['./input-overview-example.scss']
})
export class InputOverviewExample {
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
