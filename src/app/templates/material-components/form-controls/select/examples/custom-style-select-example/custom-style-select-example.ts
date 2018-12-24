import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'custom-style-select-example',
  templateUrl: './custom-style-select-example.html',
  styleUrls: ['./custom-style-select-example.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomStyleSelectExample {
  panelColor = new FormControl('red');
}
