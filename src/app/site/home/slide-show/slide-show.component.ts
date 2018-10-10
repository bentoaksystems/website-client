import {Component, Input, OnInit} from '@angular/core';
import * as marked from 'marked';
import {GetJsonFileService} from '../../../shared/services/get-json-file.service';
import {ResponsiveService} from '../../../shared/services/responsive.service';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})

export class SlideShowComponent implements OnInit {
  homeTopSection: any = [];
  isMobile = false;
  waiting = false;

  constructor(private getJsonFileService: GetJsonFileService, private responsiveService: ResponsiveService) {
  }

  ngOnInit() {
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });

    this.getJsonFileService.getHomeTopSectionData()
      .then(res => {
        console.log('res: ',res);
        this.homeTopSection = res;
        // this.homeTopSection.backgroundPic
        // this.homeTopSection.intro = marked(this.homeTopSection.intro);
        this.waiting = false;
      })
      .catch(err => {
        console.error('Cannot get home data from server: ', err);
      });



  }
}
