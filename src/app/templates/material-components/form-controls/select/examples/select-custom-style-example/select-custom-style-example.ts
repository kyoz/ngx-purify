import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'select-custom-style-example',
  templateUrl: './select-custom-style-example.html',
  styleUrls: ['./select-custom-style-example.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectCustomStyleExample {
  panelColor = new FormControl('red');
}
