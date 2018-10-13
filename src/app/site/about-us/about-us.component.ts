import { Component, OnInit } from '@angular/core';
import * as marked from 'marked';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {ResponsiveService} from '../../shared/services/responsive.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  aboutUs: any = {};
  result: any = null;
  desc = null;
  isMobile = false;
  waiting: boolean = false;

  constructor(private getJsonFileService: GetJsonFileService, private responsiveService: ResponsiveService) { }

  ngOnInit() {
    this.waiting = true;
    this.getJsonFileService.getAboutUsData()
      .then((details) => {
        this.result = details;
        this.aboutUs = this.result[0];
        this.desc = marked(this.aboutUs.description);
        this.waiting = false;
      })
      .catch(err => {
        console.error('Cannot get data!', err);
      });

    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => this.isMobile = isMobile);
  }

}
