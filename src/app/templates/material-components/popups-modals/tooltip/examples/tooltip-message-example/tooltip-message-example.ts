import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'tooltip-message-example',
  templateUrl: './tooltip-message-example.html',
  styleUrls: ['./tooltip-message-example.scss']
})
export class TooltipMessageExample {
  message = new FormControl('Info about the action');
}
