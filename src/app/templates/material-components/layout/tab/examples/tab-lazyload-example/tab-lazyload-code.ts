export const html = `
<mat-tab-group>
  <mat-tab label="First">
    <ng-template matTabContent>
      Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}
    </ng-template>
  </mat-tab>
  <mat-tab label="Second">
    <ng-template matTabContent>
      Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}
    </ng-template>
  </mat-tab>
  <mat-tab label="Third">
    <ng-template matTabContent>
      Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}
    </ng-template>
  </mat-tab>
</mat-tab-group>
`;

export const ts = `
import { Component } from '@angular/core';

@Component({
  selector: 'tab-lazyload-example',
  templateUrl: './tab-lazyload-example.html',
  styleUrls: ['./tab-lazyload-example.scss']
})
export class TabLazyloadExample {
  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }
}
`;

export const scss = `
/** No CSS for this example */
`;
