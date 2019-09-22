import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { PureSettingsService } from '../../../../../../core/pure-services/pure-settings.service';

@Component({
  selector: 'auth-side-layout',
  templateUrl: './side-layout.component.html',
  styleUrls: ['./side-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthSideLayoutComponent {
  @Input() title: string;
  @Input() showLogo: boolean = true;
  @Input() showTitle: boolean = true;

  constructor(public _settings: PureSettingsService) {
  }
}
