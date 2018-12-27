export const html = `
<mat-card class="example-card">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>Shiba Inu</mat-card-title>
    <mat-card-subtitle>Dog Breed</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src="assets/image/others/shiba2.jpg" alt="Photo of a Shiba Inu">
  <mat-card-content>
    <p>
      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.
    </p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>LIKE</button>
    <button mat-button>SHARE</button>
  </mat-card-actions>
</mat-card>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'simple-card-example',
  templateUrl: './simple-card-example.html',
  styleUrls: ['./simple-card-example.scss']
})
export class SimpleCardExample {
}
`;

export const scss = `
.example-card {
  max-width: 400px;
}

.example-header-image {
  background-image: url('/assets/image/others/shiba1.jpg');
  background-size: cover;
}
`;
