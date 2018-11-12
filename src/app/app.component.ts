import { Component } from '@angular/core';
import { PureTranslateService } from './core/pure-services/pure-translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _translator: PureTranslateService) {
    this._translator.init();
  }
}
