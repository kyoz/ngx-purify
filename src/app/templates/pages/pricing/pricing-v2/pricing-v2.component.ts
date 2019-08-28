import { Component } from '@angular/core';
import { PureSettingsService } from '../../../../core/pure-services/pure-settings.service';

@Component({
  selector: 'pricing-v2',
  templateUrl: './pricing-v2.component.html',
  styleUrls: ['./pricing-v2.component.scss']
})
export class PricingV2Component {

  constructor(public settings: PureSettingsService) { }

}