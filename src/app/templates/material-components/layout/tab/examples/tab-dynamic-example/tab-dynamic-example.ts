import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'tab-dynamic-example',
  templateUrl: './tab-dynamic-example.html',
  styleUrls: ['./tab-dynamic-example.scss']
})
export class TabDynamicExample {
  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
