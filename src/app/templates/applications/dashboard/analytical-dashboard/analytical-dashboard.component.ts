import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-analytical-dashboard',
  templateUrl: './analytical-dashboard.component.html',
  styleUrls: ['./analytical-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticalDashboard implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
