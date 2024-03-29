import { Injectable } from '@angular/core';
import { SearchResult } from '../../../shared/models/search.model';
import { Observable } from 'rxjs';
import { ArrayUtils } from '../../../shared/utils/array';
import { SEARCH_RESULTS } from '../data/search';

@Injectable()
export class SearchMockApiService {

  // Assume this data that you got from server
  private searchResults: SearchResult[] = Array.from(SEARCH_RESULTS);

  public random(searchTerm: string): Observable<SearchResult[]> {
    return new Observable(observer => {
      // setTimeout to simulate request delay time
      setTimeout(() => {
        observer.next((<SearchResult[]>ArrayUtils.shuffleArray(this.searchResults).slice(0, 20)));
        observer.complete();
      }, 500);
    });
  }
}
