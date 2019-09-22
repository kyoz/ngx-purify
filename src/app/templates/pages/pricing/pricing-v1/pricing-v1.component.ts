import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PureSettingsService } from '../../../../core/pure-services/pure-settings.service';

@Component({
  selector: 'pricing-v1',
  templateUrl: './pricing-v1.component.html',
  styleUrls: ['./pricing-v1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingV1Component {

  constructor(public _settings: PureSettingsService) { }

}
