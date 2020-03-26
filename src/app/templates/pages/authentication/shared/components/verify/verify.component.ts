import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PureSettingsService } from 'src/app/core/pure-services/pure-settings.service';

@Component({
  selector: 'auth-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthVerifyComponent {
  constructor(public _settings: PureSettingsService) { }
}
