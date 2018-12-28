import { Component } from '@angular/core';

@Component({
  selector: 'tab-navbar-example',
  templateUrl: './tab-navbar-example.html',
  styleUrls: ['./tab-navbar-example.scss']
})
export class TabNavbarExample {
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background = '';

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }
}
