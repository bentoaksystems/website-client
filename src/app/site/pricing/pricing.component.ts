import {Component, Inject, OnInit} from '@angular/core';
import {ResponsiveService} from '../../shared/services/responsive.service';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {WINDOW} from '../../shared/services/window.service';
import {Router} from '@angular/router';
import {PricingService} from '../../shared/services/pricing.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  waiting = false;
  pricing: any = [];
  planingHour: any = {};
  isMobile = false;
  selected = false;
  selectedPlan: any = {};

  programmingHour: any = {};
  backingHour: any = {};

  constructor(@Inject(WINDOW) private window,
              private getJsonFileService: GetJsonFileService,
              private responsiveService: ResponsiveService, protected router: Router, private pricingService: PricingService) {
  }

  ngOnInit() {
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });

    this.waiting = true;

    this.getJsonFileService.getPricingData()
      .then((res: any[]) => {
        this.pricing = res;
        res.forEach(e => {
          ['planingHour', 'programmingHour', 'backingHour']
            .forEach(name =>
              this[name][e.title] =
                e.title === this.pricingService.pricingInfo.title && this.pricingService.pricingInfo[name] ?
                  this.pricingService.pricingInfo[name] : undefined
          );

          this.selectedPlan[e.title] = e.title === this.pricingService.pricingInfo.title;
        });
        this.waiting = false;
      })
      .catch(err => {
        console.error('Cannot get data!', err);
      });
  }

  chgPlan(plan) {
    for (const key in this.selectedPlan) {
      if (this.selectedPlan.hasOwnProperty(key) && key !== plan) {
        this.selectedPlan[key] = false;
        ['planingHour', 'programmingHour', 'backingHour'].forEach(name => this[name][key] = undefined);
      }
    }
    this.selected = Object.keys(this.selectedPlan).map(r => this.selectedPlan[r]).reduce((x, y) => x || y, false);
    this.pricingService.pricingInfo = this.pricing.filter(r => r.title === plan)[0];
  }

  goToContactPage() {
    this.router.navigate(['/contact']);
  }

  totalPrice(planType, pricingPlan) {
    if (planType) {
      const key = planType + 'Hour';
      return this[key][pricingPlan.title] ? this[key][pricingPlan.title] * pricingPlan[planType + '_price'] : ' -- ';
    } else {
      return ['planing', 'programming', 'backing']
        .map(r => this.totalPrice(r, pricingPlan))
        .filter(r => +r)
        .reduce((x, y) => x + y, 0);
    }
  }

  setPricingInfoToService(title) {
    this.selectedPlan[title] = true;
    this.chgPlan(title);
    Object.assign(this.pricingService.pricingInfo, {
      planingHour: this.planingHour[title],
      programmingHour: this.programmingHour[title],
      backingHour: this.backingHour[title],
    });
  }
}
