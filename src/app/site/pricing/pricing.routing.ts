import {RouterModule, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {PricingComponent} from './pricing.component';


const Pricing_ROUTES: Routes = [
  {
    path: '', component: PricingComponent,
    children: [
    {path: 'pricing', component: PricingComponent},
  ]
  }
];

export const PricingRouting = RouterModule.forChild(Pricing_ROUTES);
export const PricingTestRouting = RouterTestingModule.withRoutes(Pricing_ROUTES);
