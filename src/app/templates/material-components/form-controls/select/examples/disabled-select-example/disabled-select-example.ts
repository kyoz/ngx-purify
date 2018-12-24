import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'disabled-select-example',
  templateUrl: './disabled-select-example.html',
  styleUrls: ['./disabled-select-example.scss']
})
export class DisabledSelectExample {
  disableSelect = new FormControl(false);
}
