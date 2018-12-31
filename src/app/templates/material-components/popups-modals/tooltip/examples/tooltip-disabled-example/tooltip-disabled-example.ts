import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'tooltip-disabled-example',
  templateUrl: './tooltip-disabled-example.html',
  styleUrls: ['./tooltip-disabled-example.scss']
})
export class TooltipDisabledExample {
  disabled = new FormControl(false);
}
