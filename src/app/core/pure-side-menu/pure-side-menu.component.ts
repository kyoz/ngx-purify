import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PureSideMenuService } from './pure-side-menu.service';

@Component({
  selector: 'pure-side-menu',
  templateUrl: './pure-side-menu.component.html',
  styleUrls: ['./pure-side-menu.component.scss'],
})
export class PureSideMenu implements OnInit {

  constructor(
    public _menu: PureSideMenuService
  ) { }

  ngOnInit() {
  }

}
