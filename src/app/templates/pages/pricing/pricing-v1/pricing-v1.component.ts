import { Component, OnInit } from '@angular/core';
import { PureSettingsService } from '../../../../core/pure-services/pure-settings.service';

@Component({
  selector: 'pricing-v1',
  templateUrl: './pricing-v1.component.html',
  styleUrls: ['./pricing-v1.component.scss']
})
export class PricingV1Component implements OnInit {

  constructor(public settings: PureSettingsService) { }

  ngOnInit() {
  }

}
