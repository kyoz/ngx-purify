import { Component, Input } from '@angular/core';
import { PureSettingsService } from 'src/app/core/pure-services/pure-settings.service';

@Component({
  selector: 'material-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title;
  @Input() routes;
  @Input() referenceUrl;

  constructor(public _settings: PureSettingsService) { }
}
