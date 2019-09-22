import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaintenanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
