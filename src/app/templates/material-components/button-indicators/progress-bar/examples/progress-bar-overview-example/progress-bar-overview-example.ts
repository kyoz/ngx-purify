import { Component } from '@angular/core';

@Component({
  selector: 'progress-bar-overview-example',
  templateUrl: './progress-bar-overview-example.html',
  styleUrls: ['./progress-bar-overview-example.scss']
})
export class ProgressBarOverviewExample {
  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
}
