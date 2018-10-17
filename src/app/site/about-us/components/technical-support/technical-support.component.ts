import {Component, Input, OnInit} from '@angular/core';
import {ResponsiveService} from '../../../../shared/services/responsive.service';
import * as marked from 'marked';

@Component({
  selector: 'app-technical-support',
  templateUrl: './technical-support.component.html',
  styleUrls: ['./technical-support.component.css']
})

export class TechnicalSupportComponent implements OnInit {
<<<<<<< HEAD
     techsuppInfo;
    desc;
    isMobile = false;

    @Input('techsuppInfo') set techsupp_Info (data) {
        if(!data) return;
        this.techsuppInfo = data.filter(x => x.title === 'Technical Support')[0];
        this.desc = marked(this.techsuppInfo.description)
      };

    constructor(private responsiveService: ResponsiveService) { }

    ngOnInit() {
        this.isMobile = this.responsiveService.isMobile;
        this.responsiveService.switch$.subscribe(isMobile => this.isMobile = isMobile);
    }
=======
  techsuppInfo;
  desc = null;
  isMobile = false;

  @Input('techsuppInfo')
  set techsupp_Info(data) {
    if (!data) return;

    this.techsuppInfo = data.filter(x => x.title === 'Technical Support')[0];
    this.desc = marked(this.techsuppInfo.description)
  };
>>>>>>> 97837ace3128778875ddbd47980d78d9c3fb3e58

  constructor(private responsiveService: ResponsiveService) {
  }

  ngOnInit() {
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => this.isMobile = isMobile);
  }

}
