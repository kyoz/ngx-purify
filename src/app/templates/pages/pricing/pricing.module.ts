import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PricingRoutingModule } from './pricing-routing.module';

// Components
import { PricingV1Component } from './pricing-v1/pricing-v1.component';
import { PricingV2Component } from './pricing-v2/pricing-v2.component';
import { PricingV3Component } from './pricing-v3/pricing-v3.component';

@NgModule({
  imports: [
    SharedModule,
    PricingRoutingModule
  ],
  declarations: [
    PricingV1Component,
    PricingV2Component,
    PricingV3Component
  ]
})
export class PricingModule {	}
