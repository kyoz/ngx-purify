import { Component } from '@angular/core';

@Component({
  selector: 'progress-spinner-overview-example',
  templateUrl: './progress-spinner-overview-example.html',
  styleUrls: ['./progress-spinner-overview-example.scss']
})
export class ProgressSpinnerOverviewExample {
  color = 'primary';
  mode = 'determinate';
  value = 50;
}
