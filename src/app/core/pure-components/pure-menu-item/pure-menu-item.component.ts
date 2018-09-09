import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { IMenuItem } from '../../pure-interfaces/menu';

@Component({
  selector: 'pure-menu-item',
  templateUrl: './pure-menu-item.component.html',
  styleUrls: ['./pure-menu-item.component.scss']
})
export class PureMenuItem implements OnInit {
  @ViewChildren(PureMenuItem) children: QueryList<PureMenuItem>;
  @Input() menuItem: IMenuItem;
  @Input() level = 0;

  constructor() {
  }

  ngOnInit() {
    // Menu with so much level with shrink the text. It doens't provide a good UI experience.
    // So i limit it at 5 levels. From 0 (Default level) to 4
    // In this case i recommend create multi groups for menu items
    if (this.level > 4) {
      this.level = 4;
    }
  }

  get hasChildren(): boolean {
    if (!this.menuItem || !this.menuItem.children) {
      return false;
    }
    return this.menuItem.children.length > 0;
  }

}
