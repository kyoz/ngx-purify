import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { PricingV1Component } from './pricing-v1/pricing-v1.component';
import { PricingV2Component } from './pricing-v2/pricing-v2.component';
import { PricingV3Component } from './pricing-v3/pricing-v3.component';
import { PricingV4Component } from './pricing-v4/pricing-v4.component';

const routes: Routes = [
  { path: 'style-1', component: PricingV1Component },
  { path: 'style-2', component: PricingV2Component },
  { path: 'style-3', component: PricingV3Component },
  { path: 'style-4', component: PricingV4Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingRoutingModule {}

