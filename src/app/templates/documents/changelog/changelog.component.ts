import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'document-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Changelog implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
