import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PureSettingsService } from 'src/app/core/pure-services/pure-settings.service';

@Component({
  selector: 'auth-session',
  templateUrl: './session.component.html',
  styleUrls: ['session.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthSessionComponent {
  constructor(public _settings: PureSettingsService) { }
}
