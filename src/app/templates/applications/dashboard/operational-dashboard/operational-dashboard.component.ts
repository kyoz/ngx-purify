import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-operational-dashboard',
  templateUrl: './operational-dashboard.component.html',
  styleUrls: ['./operational-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperationalDashboard implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
