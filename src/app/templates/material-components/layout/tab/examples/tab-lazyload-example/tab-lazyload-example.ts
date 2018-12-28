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
