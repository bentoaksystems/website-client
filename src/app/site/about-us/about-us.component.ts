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
  desc = null;
  isMobile = false;

  constructor(private getJsonFileService: GetJsonFileService, private responsiveService: ResponsiveService) { }

  ngOnInit() {
    this.getJsonFileService.getAboutUsData()
      .then((details) => {
        this.aboutUs = details;
        this.desc = marked(this.aboutUs.description);
      })
      .catch(err => {
        console.error('Cannot get data!', err);
      });

    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => this.isMobile = isMobile);
  }

}
