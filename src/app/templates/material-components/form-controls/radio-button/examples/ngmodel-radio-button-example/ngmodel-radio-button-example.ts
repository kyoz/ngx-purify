import { Component } from '@angular/core';

@Component({
  selector: 'ngmodel-radio-button-example',
  templateUrl: './ngmodel-radio-button-example.html',
  styleUrls: ['./ngmodel-radio-button-example.scss']
})
export class NgModelRadioButtonExample {
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
