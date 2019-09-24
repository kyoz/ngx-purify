import { Component, Input } from '@angular/core';
import { PureSettingsService } from 'src/app/core/pure-services/pure-settings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {

  @Input() referenceUrl: string;

  title: string;
  routes: string[];

  constructor(
    private _router: Router,
    public _settings: PureSettingsService
  ) {
    this.initialize();
  }

  initialize() {
    const url = this._router.url.split('?')[0];
    const split = url.split('/');

    this.title = split[split.length - 1].replace(/-/g, ' ');

    if (split.length > 1) {
      this.routes = split.slice(1, split.length - 1).map(d => d.replace(/-/g, ' '));
    }
  }
}
