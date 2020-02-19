import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { ImmutableSelector, ImmutableContext } from '@ngxs-labs/immer-adapter';
import { PureMockApiService } from '../../core/pure-mock-api/pure-mock-api.service';
import { SearchResult } from '../../shared/models/search.model';
import { Search } from './search.actions';

export class SearchAppStateModel {
  searchResults: SearchResult[];
}

@State<SearchAppStateModel>({
  name: 'searchApp',
  defaults: {
    searchResults: []
  }
})
@Injectable()
export class SearchAppState {
  constructor(private _mockApi: PureMockApiService) { }

  @Selector()
  @ImmutableSelector()
  static getSearchResults(state: SearchAppStateModel) {
    return state.searchResults;
  }

  @ImmutableContext()
  @Action(Search)
  search({ setState }: StateContext<SearchAppStateModel>, { searchTerm }: Search) {
    this._mockApi.search.random(searchTerm).subscribe((searchResults: SearchResult[]) => {
      setState((state: SearchAppStateModel) => {
        state.searchResults = searchResults;
        return state;
      });
    });
  }
}

