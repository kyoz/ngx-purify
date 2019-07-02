import { Component, Input } from '@angular/core';
import { PureSettingsService } from 'src/app/core/pure-services/pure-settings.service';

@Component({
  selector: 'page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title: string;
  @Input() routes: string[];
  @Input() referenceUrl: string;

  constructor(public _settings: PureSettingsService) { }
}
