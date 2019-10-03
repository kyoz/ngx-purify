import { Component, OnInit, OnDestroy, AfterViewChecked, ChangeDetectionStrategy,
  ChangeDetectorRef } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { EventLogAppState } from '../../../stores/event-log/event-log.state';
import { GetEventLogTypes, Search } from '../../../stores/event-log/event-log.actions';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { EventLog, EventLogType } from '../../../shared/models/event-log.model';

@Component({
  selector: 'app-event-log',
  templateUrl: './event-log.component.html',
  styleUrls: ['./event-log.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventLogApp implements OnInit, OnDestroy, AfterViewChecked {
  @Select(EventLogAppState.getEventLogTypes) eventLogTypes$: Observable<EventLogType[]>;
  @Select(EventLogAppState.getEventLogs) eventLogs$: Observable<EventLog[]>;

  isSearching$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  model = {
    type: undefined,
    timestamp: new Date()
  };

  private isDetachDetectionChanges = false;
  private subscriptions: Map<string, Subscription> = new Map();

  constructor(
    private _store: Store,
    private _changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.initialize();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

  ngAfterViewChecked() {
    if (this.isDetachDetectionChanges) {
      this._changeDetectorRef.detach();
      this.isDetachDetectionChanges = true;
    }
  }

  initialize() {
    this._store.dispatch(new GetEventLogTypes());

    const subscription = this.eventLogs$.subscribe((logs: EventLog[]) => {
      console.log(logs);
      if (logs.length === 0) {
        // Do first search if there no data
        this.search('lorem', new Date());
        return;
      }

      this.isSearching$.next(false);

      // Scroll to the top to view latest result
      // if (this.contentScrollbar) {
      //   this.contentScrollbar.scrollToTop();
      // }
    });

    this.subscriptions.set('searchLog', subscription);
  }

  search(type: string, timestamp: Date) {
    this.isSearching$.next(true);
    this._store.dispatch(new Search(type, timestamp));
  }
}
