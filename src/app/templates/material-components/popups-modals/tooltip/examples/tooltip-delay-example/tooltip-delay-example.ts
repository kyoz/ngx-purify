import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'tooltip-delay-example',
  templateUrl: './tooltip-delay-example.html',
  styleUrls: ['./tooltip-delay-example.scss']
})
export class TooltipDelayExample {
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);
}
