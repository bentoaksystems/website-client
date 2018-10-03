import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {ResponsiveService} from '../../shared/services/responsive.service';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {WINDOW} from '../../shared/services/window.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  @Output() customerOfferObj = new EventEmitter();

  waiting = false;
  pricing: any = [];
  isMobile = false;

  basicPlaningHour = null;
  basicProgrammingHour = null;
  basicBackingHour = null;
  standardPlaningHour = null;
  standardProgrammingHour = null;
  standardBackingHour = null;
  advancedPlaningHour = null;
  advancedProgrammingHour = null;
  advancedBackingHour = null;
  selectBasic = false;
  selectStandard = false;
  selectAdvanced = false;

  selectedModeInfo: any = {};

  constructor(@Inject(WINDOW) private window,
              private getJsonFileService: GetJsonFileService, private responsiveService: ResponsiveService, protected router: Router) {
  }

  ngOnInit() {
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });

    this.waiting = true;

    this.getJsonFileService.getPricingData()
      .then((res) => {
        this.pricing = res;
        this.waiting = false;
      })
      .catch(err => {
        console.error('Cannot get data!', err);
      });
  }

  selectPricing(basicSel, standardSel, AdvancedSel) {
    this.selectBasic = basicSel;
    this.selectStandard = standardSel;
    this.selectAdvanced = AdvancedSel;
    this.selectedModeInfo.selectedMode = this.selectBasic || this.selectStandard || this.selectAdvanced ? true : false;
  }

  goToContactPage() {
    if (this.selectBasic) {
      this.selectedModeInfo = {
        selectedMode: 'basic',
        planingHour: this.basicPlaningHour,
        programmingHour: this.basicProgrammingHour,
        backingHour: this.basicBackingHour
      }
    } else if (this.selectStandard) {
      this.selectedModeInfo = {
        selectedMode: 'standard',
        planingHour: this.standardPlaningHour,
        programmingHour: this.standardProgrammingHour,
        backingHour: this.standardBackingHour
      }
    }  else if (this.selectAdvanced) {
      this.selectedModeInfo = {
        selectedMode: 'advanced',
        planingHour: this.advancedPlaningHour,
        programmingHour: this.advancedProgrammingHour,
        backingHour: this.advancedBackingHour
      }
    } else {
      this.selectedModeInfo = {
        selectedMode: false,
        planingHour: null,
        programmingHour: null,
        backingHour: null
      }
    }
    this.customerOfferObj.emit(this.selectedModeInfo);
    this.router.navigate(['/contact']);
  }
}
