import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PricingComponent} from './pricing.component';
import {PricingRouting} from './pricing.routing';

@NgModule({
  imports: [
    CommonModule,
    PricingRouting
  ],
  declarations: [PricingComponent]
})
export class PricingModule { }
