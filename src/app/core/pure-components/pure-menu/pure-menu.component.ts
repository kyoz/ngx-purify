import { Component, OnInit } from '@angular/core';
import { MENU_CONFIG } from '../../../configs/menu';

@Component({
  selector: 'pure-menu',
  templateUrl: './pure-menu.component.html',
  styleUrls: ['./pure-menu.component.scss']
})
export class PureMenu implements OnInit {
  menuData = MENU_CONFIG;

  constructor() { }

  ngOnInit() {
  }

}
