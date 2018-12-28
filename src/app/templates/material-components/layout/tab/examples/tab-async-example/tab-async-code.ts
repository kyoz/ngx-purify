export const html = `
<ng-container *ngIf="(asyncTabs | async) === null">
  Loading tabs...
</ng-container>

<mat-tab-group>
  <mat-tab *ngFor="let tab of asyncTabs | async">
    <ng-template mat-tab-label>{{tab.label}}</ng-template>
    {{tab.content}}
  </mat-tab>
</mat-tab-group>
`;

export const ts = `
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
`;

export const scss = `
/** No CSS for this example */
`;
