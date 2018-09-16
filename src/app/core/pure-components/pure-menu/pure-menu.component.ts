import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PureMenuContainerService } from '../../pure-containers/pure-menu-container/pure-menu-container.service';
import { MENU_CONFIG } from '../../../configs/menu';

@Component({
  selector: 'pure-menu',
  templateUrl: './pure-menu.component.html',
  styleUrls: ['./pure-menu.component.scss']
})
export class PureMenu implements OnInit {
  @ViewChild('PURE_MENU') pureMenu: ElementRef;

  menuData = MENU_CONFIG;

  constructor(public _menuContainer: PureMenuContainerService) { }

  ngAfterViewInit() {

    /**
     * If there is activated memu item, scroll to it and make it is center of the menu
     */
    const activatingMenuItemRef = document.getElementsByClassName('pure-menu-content active');

    if (activatingMenuItemRef) {
      activatingMenuItemRef[0].scrollIntoView(true);

      // Menu has scroll all the way to bottom
      if (this.pureMenu.nativeElement.scrollHeight <= (this.pureMenu.nativeElement.scrollTop + window.innerHeight - 64)) {
        return;
      }
      // 64 is the height of toolbar, 24 is half of the item height
      const centerScreenHeight = (window.innerHeight - 64) / 2 - 24;

      this.pureMenu.nativeElement.scrollTop -= centerScreenHeight;

      const scrollTopInInnerHeight = this.pureMenu.nativeElement.scrollTop * window.innerHeight / this.pureMenu.nativeElement.scrollHeight;

      if (scrollTopInInnerHeight < centerScreenHeight) {
        setTimeout(() => {
          this.pureMenu.nativeElement.scrollTop -= (centerScreenHeight - scrollTopInInnerHeight) / 2 + 48;
        });
      }
    }
  }

  ngOnInit() {
  }
}
