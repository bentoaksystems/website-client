import {Component, OnInit} from '@angular/core';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {ResponsiveService} from '../../shared/services/responsive.service';
import {PricingService} from '../../shared/services/pricing.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: any = [];
  waiting: boolean = false;
  isMobile = false;
  constructor(private getJsonService: GetJsonFileService, private responsiveService: ResponsiveService) {
  }

  ngOnInit() {
    this.waiting = true;
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });
    this.getJsonService.getPeopleData()
      .then(res => {
        this.people = res;
        this.waiting = false;
      })
      .catch(err => console.error('people data fetch failed', err));
  }

}
