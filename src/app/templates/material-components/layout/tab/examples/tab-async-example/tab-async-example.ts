import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'tab-async-example',
  templateUrl: './tab-async-example.html',
  styleUrls: ['./tab-async-example.scss']
})
export class TabAsyncExample {
  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
    this.asyncTabs = Observable.create((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'First', content: 'Content 1'},
          {label: 'Second', content: 'Content 2'},
          {label: 'Third', content: 'Content 3'},
        ]);
      }, 1000);
    });
  }
}
