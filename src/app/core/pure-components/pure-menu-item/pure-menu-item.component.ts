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
  @Input() parent: PureMenuItem;
  @Input() level = 0;
  @Input() active = false;
  @Input() opened = false;

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

  /**
   * GET FUNCTIONS
   */

  get hasChildren(): boolean {
    if (!this.menuItem || !this.menuItem.children) {
      return false;
    }
    return this.menuItem.children.length > 0;
  }

  get height(): number {
    if (!this.opened) return 0;

    let addedHeight = 0;
    if(this.children) {
      this.children.forEach(childComponent => {
        if(childComponent) {
          addedHeight += childComponent.height;
        }
      });
    }
    return (this.menuItem.children.length * 48) + addedHeight;
  }

  /**
   * FUNCTIONS
   */

  onMenuItemClicked() {
    if (this.hasChildren) {
      this.toggleDropdown();
    }
  }

  toggleDropdown() {
    this.opened = !this.opened;

    // Collapse all child item if possible
    if(this.children) {
      this.children.forEach(childComponent => {
        if(childComponent.opened) {
          childComponent.toggleDropdown();
        }
      });
    } 
  }
}
