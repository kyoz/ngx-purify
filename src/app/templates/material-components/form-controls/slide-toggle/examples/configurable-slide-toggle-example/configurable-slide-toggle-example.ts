import { Component } from '@angular/core';

@Component({
  selector: 'configurable-slide-toggle-example',
  templateUrl: './configurable-slide-toggle-example.html',
  styleUrls: ['./configurable-slide-toggle-example.scss']
})
export class ConfigurableSlideToggleExample {
  color = 'accent';
  checked = false;
  disabled = false;
}
