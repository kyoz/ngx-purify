import { Component } from '@angular/core';

@Component({
  selector: 'radio-button-ngmodel-example',
  templateUrl: './radio-button-ngmodel-example.html',
  styleUrls: ['./radio-button-ngmodel-example.scss']
})
export class RadioButtonNgModelExample {
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
