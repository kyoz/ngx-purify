import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { PureSettingsService } from 'src/app/core/pure-services/pure-settings.service';

@Component({
  selector: 'page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Input() title;
  @Input() routes;
  @Input() referenceUrl;

  constructor(public _settings: PureSettingsService) { }
}
