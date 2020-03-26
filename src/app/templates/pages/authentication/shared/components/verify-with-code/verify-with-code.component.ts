import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PureSettingsService } from 'src/app/core/pure-services/pure-settings.service';

@Component({
  selector: 'auth-verify-with-code',
  templateUrl: './verify-with-code.component.html',
  styleUrls: ['./verify-with-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthVerifyWithCodeComponent {
  verifyCode: string;

  constructor(public _settings: PureSettingsService) { }
}
