import { Component, OnInit } from '@angular/core';
import * as marked from 'marked';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {ResponsiveService} from '../../shared/services/responsive.service';
import {SpinnerService} from '../../shared/services/spinner.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  results: any = null;
  desc = null;
  isMobile = false;

  constructor(private getJsonFileService: GetJsonFileService, private responsiveService: ResponsiveService,
              private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerService.enable();
    this.getJsonFileService.getAboutUsData()
      .then((details) => {
        this.results = details;
        this.results[0].description = marked(this.results[0].description);
        this.spinnerService.disable();
      })
      .catch(err => {
        console.error('Cannot get data!', err);
      });

    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => this.isMobile = isMobile);
  }

}
