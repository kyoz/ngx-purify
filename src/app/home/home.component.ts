import { Component, OnInit } from '@angular/core';
import { PureSidenavService } from '../shared/pure-sidenav/pure-sidenav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public _sidenav: PureSidenavService
  ) { }

  ngOnInit() {
  }
}
