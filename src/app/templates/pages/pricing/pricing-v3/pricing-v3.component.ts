import { Component, OnInit } from '@angular/core';
import { PureSettingsService } from '../../../../core/pure-services/pure-settings.service';

@Component({
  selector: 'pricing-v3',
  templateUrl: './pricing-v3.component.html',
  styleUrls: ['./pricing-v3.component.scss']
})
export class PricingV3Component implements OnInit {

  constructor(public settings: PureSettingsService) { }

  ngOnInit() {
  }

}
