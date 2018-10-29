import {Component, OnInit} from '@angular/core';
import {GetJsonFileService} from '../../../shared/services/get-json-file.service';
import {ResponsiveService} from '../../../shared/services/responsive.service';
import {SpinnerService} from '../../../shared/services/spinner.service';
import {HttpService} from '../../../shared/services/http.service';
import { Router } from '@angular/router';
import { ScrollService } from 'app/shared/services/scroll.service';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css'],
})

export class SlideShowComponent implements OnInit {
  homeTopSections: any = [];
  isMobile = false;

  constructor(private httpService: HttpService,
    private scrollService: ScrollService,
    protected router: Router,
              private getJsonFileService: GetJsonFileService,
              private responsiveService: ResponsiveService,
              private spinnerService: SpinnerService) {
  }

  ngOnInit() {
    this.spinnerService.enable();
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });

    this.getJsonFileService.getHomeTopSectionData()
      .then(res => {
        this.homeTopSections = res;
        this.spinnerService.disable();
      })
      .catch(err => {
        console.error('Cannot get home data from server: ', err);
      });

  }
  setPosition(positionStr) {
    this.scrollService.position = positionStr;

  }
}
