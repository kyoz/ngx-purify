import { Injectable } from '@angular/core';
import { SearchResult } from '../../../shared/models/search.model';
import { shuffleArray } from '../../../shared/utils/array';
import { Observable } from 'rxjs';
import { SEARCH_RESULTS } from '../data/search';

@Injectable()
export class SearchMockApiService {

  // Assume this data that you got from server
  private searchResults: SearchResult[] = Array.from(SEARCH_RESULTS);

  public random(searchTerm: string): Observable<SearchResult[]> {
    return new Observable(observer => {
      // setTimeout to simulate request delay time
      setTimeout(() => {
        observer.next((<SearchResult[]>shuffleArray(this.searchResults).slice(0, 10)));
        observer.complete();
      }, 1000);
    });
  }
}
