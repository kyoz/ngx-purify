import { Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy, AfterViewChecked } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { SearchAppState } from '../../../stores/search/search.state';
import { Search as SearchAction } from '../../../stores/search/search.actions';
import { SearchResult } from '../../../shared/models/search.model';
import { PureSettingsService } from '../../../core/pure-services/pure-settings.service';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { StringUtils } from '../../../shared/utils/string';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Search implements OnDestroy, AfterViewChecked {
  @ViewChild('content', { static: false }) contentScrollbar?: PerfectScrollbarDirective;

  @Select(SearchAppState.getSearchResults) searchResults$: Observable<SearchResult[]>;

  isSearching$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private isDetachDetectionChanges = false;
  private subscriptions: Map<string, Subscription> = new Map();

  constructor(
    private _store: Store,
    private _changeDetectorRef: ChangeDetectorRef,
    public _settings: PureSettingsService
  ) {
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
    // Do first search
    this.search('lorem');

    // Detect when search result changes
    this.searchResults$.subscribe((searchResults: SearchResult[]) => {
      this.isSearching$.next(false);

      // Scroll to the top to view latest result
      if (this.contentScrollbar) {
        this.contentScrollbar.scrollToTop();
      }
    });
  }

  search(searchTerm: string) {
    if (StringUtils.isEmpty(searchTerm)) {
      return;
    }

    this.isSearching$.next(true);
    this._store.dispatch(new SearchAction(searchTerm));
  }

  trackByFn(index: number, searchResult: SearchResult) {
    return searchResult.id;
  }
}
