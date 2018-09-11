import { Component, OnInit, Input, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { IMenuItem } from '../../pure-interfaces/menu';

@Component({
  selector: 'pure-menu-item',
  templateUrl: './pure-menu-item.component.html',
  styleUrls: ['./pure-menu-item.component.scss']
})
export class PureMenuItem implements OnInit {
  @ViewChildren(PureMenuItem) childMenuItems: QueryList<PureMenuItem>;

  @Input() menuItemData: IMenuItem;
  @Input() level = 0;
  @Input() active = false;
  @Input() opened = false;
  @Input() expandingMenuItem: PureMenuItem; // To collapse expading menu when expand other menu

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
    if (!this.menuItemData || !this.menuItemData.children) {
      return false;
    }
    return this.menuItemData.children.length > 0;
  }

  get height(): number {
    if (!this.opened) return 0;

    let addedHeight = 0;
    if(this.childMenuItems) {
      this.childMenuItems.forEach(childComponent => {
        if(childComponent) {
          addedHeight += childComponent.height;
        }
      });
    }
    return (this.menuItemData.children.length * 48) + addedHeight;
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
    if (this.opened) {
      this.collapseDropdown();
    } else {
      this.opened = true;
    }
  }

  collapseDropdown() {
    this.opened = false;

    // Collapse all child item if possible
    if(!this.opened && this.childMenuItems) {
      this.childMenuItems.forEach(childComponent => {
        if(childComponent.opened) {
          childComponent.toggleDropdown();
        }
      });
    } 
  }
}
