import { Component, OnInit, AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-event-log',
  templateUrl: './event-log.component.html',
  styleUrls: ['./event-log.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventLog implements OnInit {

  constructor(private _changeDetectorRef: ChangeDetectorRef) {
    // this._changeDetectorRef.detectChanges();
  }

  ngOnInit() {
  }

}
