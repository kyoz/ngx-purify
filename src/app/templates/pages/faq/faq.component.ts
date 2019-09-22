import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { PureSettingsService } from '../../../core/pure-services/pure-settings.service';
import { FAQ_GROUPS } from './faq-data';

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent {

  searchTerm$: BehaviorSubject<string> = new BehaviorSubject('');
  filteredFaqs$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(public _settings: PureSettingsService) {
    this.filteredFaqs$.next(FAQ_GROUPS);

    // Register for search
    this.searchTerm$.pipe(debounceTime(300), distinctUntilChanged()).subscribe(searchTerm => {
      this.filterFaq(searchTerm);
    });
  }

  private filterFaq(value: string) {
    const filterValue = value.toLowerCase();
    const result = [];

    for (const group of FAQ_GROUPS) {
      const matchFaqs = group.faqs.filter(faq => {
        const matchQuestion = faq.question.toLowerCase().indexOf(filterValue) !== -1;
        const matchAnswer = faq.answer.toLowerCase().indexOf(filterValue) !== -1;

        return matchQuestion || matchAnswer;
      });

      if (matchFaqs && matchFaqs.length > 0) {
        const _group = {...group};
        _group.faqs = matchFaqs;
        result.push(_group);
      }
    }

    this.filteredFaqs$.next(result);
  }

  trackGroupByFn(index: number, group: any) {
    return `${group.name}_${index}`;
  }

  trackFaqByFn(faq: any, index: number) {
    return index;
  }
}
