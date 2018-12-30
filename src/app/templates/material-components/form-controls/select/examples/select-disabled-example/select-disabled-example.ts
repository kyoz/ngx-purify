import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'select-disabled-example',
  templateUrl: './select-disabled-example.html',
  styleUrls: ['./select-disabled-example.scss']
})
export class SelectDisabledExample {
  disableSelect = new FormControl(false);
}
