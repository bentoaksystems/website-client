import {Component, Inject, OnInit} from '@angular/core';
import {ResponsiveService} from '../../shared/services/responsive.service';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {WINDOW} from '../../shared/services/window.service';
import {Router} from '@angular/router';
import {PricingService} from '../../shared/services/pricing.service';
import {SpinnerService} from '../../shared/services/spinner.service';
import { DictionaryService } from '../../shared/services/dictionary.service';
import { TranslatorComponent } from '../../shared/components/translator.component';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent extends TranslatorComponent implements OnInit {

  waiting = false;
  pricing: any = [];
  isMobile = false;
  selected = false;
  selectedPlan: any = {};
  prices: any = {};
  fields: any = {x:[]};
  quantity: any = {};

  constructor(@Inject(WINDOW) private window,
              private getJsonFileService: GetJsonFileService,
              private responsiveService: ResponsiveService, protected router: Router,
              private pricingService: PricingService, private spinnerService: SpinnerService,
              dictionaryService: DictionaryService) {
                super(dictionaryService);
  }

  ngOnInit() {
    this.spinnerService.enable();
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });

    this.getJsonFileService.getPricingData()
      .then((res: any[]) => {
        this.spinnerService.disable();
        res.forEach(e => {
          const fields = Object.keys(e)
            .filter(k => k.includes('_price') && e[k])
            .map(k => k.substr(0, k.length - 6));

          fields.forEach(name => {
              if (!(name in this.quantity)) {
                this.quantity[name] = {};
              }
              this.quantity[name][e.title] =
                e.title === this.pricingService.pricingInfo.title && this.pricingService.pricingInfo[name] ?
                  this.pricingService.pricingInfo[name] : undefined;
              if (!(name in this.prices)) {
                this.prices[name] = {};
              }
              this.prices[name][e.title] = e[name + '_price'];
            }
          );
          this.fields[e.title] = fields;
          this.selectedPlan[e.title] = e.title === this.pricingService.pricingInfo.title;
          this.selected = Object.keys(this.selectedPlan).map(r => this.selectedPlan[r]).reduce((x, y) => x || y, false);
        });
        this.pricing = res;
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
        this.fields[key].forEach(name => this.quantity[name][key] = undefined);
      }
    }
    this.selected = Object.keys(this.selectedPlan).map(r => this.selectedPlan[r]).reduce((x, y) => x || y, false);
    this.pricingService.pricingInfo = this.pricing.filter(r => r.title === plan)[0];
  }

  goToContactPage() {
    this.router.navigate(['/contact']);
  }

  totalPrice(planType, pricingPlan, q = this.quantity[planType] ? this.quantity[planType][pricingPlan.title] : null) {
    if (planType) {
      return q ? q * pricingPlan[planType + '_price'] : null;
    } else {
      return this.fields[pricingPlan.title] ?
        this.fields[pricingPlan.title]
        .map(r => this.totalPrice(r, pricingPlan))
        .filter(r => +r)
        .reduce((x, y) => x + y, 0) : null;
    }
  }

  equity(pricingPlan) {
    if (!pricingPlan.equity_comp) {
      return null;
    }
    const cashPlan = this.pricing.find(r => r.acronym === pricingPlan.cash_plan);
    return this.selectedPlan[pricingPlan.title] && this.fields[pricingPlan.title] && cashPlan ?
      this.fields[pricingPlan.title]
        .map(r => this.totalPrice(r, cashPlan, this.quantity[r] ? this.quantity[r][pricingPlan.title] : 0) - this.totalPrice(r, pricingPlan))
        .filter(r => +r)
        .reduce((x, y) => x + y, 0) : null;
  }

  setPricingInfoToService(title) {
    this.selectedPlan[title] = true;
    this.chgPlan(title);
    Object.assign(this.pricingService.pricingInfo, {
      planingHour: this.prices[title],
      programmingHour: this.prices[title],
      backingHour: this.prices[title],
    });
  }
}
