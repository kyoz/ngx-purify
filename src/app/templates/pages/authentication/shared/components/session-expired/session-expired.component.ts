import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PureSettingsService } from 'src/app/core/pure-services/pure-settings.service';

@Component({
  selector: 'auth-session-expired',
  templateUrl: './session-expired.component.html',
  styleUrls: ['session-expired.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthSessionExpiredComponent {
  constructor(public _settings: PureSettingsService) { }
}
