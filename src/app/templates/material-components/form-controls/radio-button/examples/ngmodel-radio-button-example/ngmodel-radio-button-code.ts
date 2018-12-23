export const html = `
<mat-radio-group class="example-radio-group" [(ngModel)]="favoriteSeason">
  <mat-radio-button class="example-radio-button" *ngFor="let season of seasons" [value]="season">
    {{season}}
  </mat-radio-button>
</mat-radio-group>
<div class="example-selected-value">Your favorite season is: {{favoriteSeason}}</div>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'ngmodel-radio-button-example.html',
  templateUrl: './ngmodel-radio-button-example.html',
  styleUrls: ['./ngmodel-radio-button-example.scss']
})
export class NgModelRadioButtonExample {
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
`;

export const scss = `
.example-radio-group {
  display: inline-flex;
  flex-direction: column;
}

.example-radio-button {
  margin: 5px;
}

.example-selected-value {
  margin: 15px 0;
}
`;
