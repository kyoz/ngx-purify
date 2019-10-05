import { Component, ViewChild,  OnInit, OnDestroy, AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { EventLogAppState } from '../../../stores/event-log/event-log.state';
import { PureSettingsService } from '../../../core/pure-services/pure-settings.service';
import { PureMainContainerService } from '../../../core/pure-containers/pure-main-container/pure-main-container.service';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
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
  @ViewChild('content', { static: false }) contentScrollbar?: PerfectScrollbarDirective;

  @Select(EventLogAppState.getEventLogTypes) eventLogTypes$: Observable<EventLogType[]>;
  @Select(EventLogAppState.getEventLogs) eventLogs$: Observable<EventLog[]>;

  isSearching$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isFirstLoad = true;

  model = {
    type: undefined,
    timestamp: new Date()
  };

  private isDetachDetectionChanges = false;
  private subscriptions: Map<string, Subscription> = new Map();

  constructor(
    private _store: Store,
    private _changeDetectorRef: ChangeDetectorRef,
    public _settings: PureSettingsService,
    public _container: PureMainContainerService
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
      if (logs.length === 0 && this.isFirstLoad) {
        // Do first search if there no data
        this.search();
        this.isFirstLoad = false;
        return;
      }

      this.isSearching$.next(false);

      // Scroll to the top to view latest result
      if (this.contentScrollbar) {
        this.contentScrollbar.scrollToTop();
      }
    });

    this.subscriptions.set('searchLog', subscription);
  }

  search() {
    this.isSearching$.next(true);
    this._store.dispatch(new Search(
      this.model.type,
      this.model.timestamp.setHours(0,0,0,0)
    ));
  }

  onTypeChanged(e) {
    this.model.type = e.value
    this.search();
  }

  onDateChanged(e) {
    if (!e.value) {
      return;
    }

    this.model.timestamp = e.value;
    this.search();
  }
}
