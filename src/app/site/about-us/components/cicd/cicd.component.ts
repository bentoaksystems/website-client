import { Component, OnInit } from '@angular/core';
import * as marked from 'marked';
import {GetJsonFileService} from '../../../../shared/services/get-json-file.service';
import {ResponsiveService} from '../../../../shared/services/responsive.service';


@Component({
  selector: 'app-cicd',
  templateUrl: './cicd.component.html',
  styleUrls: ['./cicd.component.css']
})
export class CICDComponent implements OnInit {
  aboutUs: any = {};
  desc = null;
  isMobile = false;

  constructor(private getJsonFileService: GetJsonFileService, private responsiveService: ResponsiveService) { }

  ngOnInit() {
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => this.isMobile = isMobile);
    this.getJsonFileService.getAboutUsData()
      .then((details) => {
        this.aboutUs = details[0];
        this.desc = marked(this.aboutUs.description);
        // this.waiting = false;
      })
      .catch(err => {
        console.error('Cannot get data!', err);
      });
  }

}
