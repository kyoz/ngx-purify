import { Component } from '@angular/core';
import { PureSettingsService } from '../../../../core/pure-services/pure-settings.service';

@Component({
  selector: 'pricing-v4',
  templateUrl: './pricing-v4.component.html',
  styleUrls: ['./pricing-v4.component.scss']
})
export class PricingV4Component {

  constructor(public _settings: PureSettingsService) { }

}
