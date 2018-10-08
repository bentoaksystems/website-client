import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PricingService {
  // pricingInfo: BehaviorSubject<any> = new BehaviorSubject<any>({});
  pricingInfo: any = {};
  constructor() { }
}
