import {Component, Input, OnInit} from '@angular/core';
import {ResponsiveService} from '../../../../shared/services/responsive.service';
import * as marked from 'marked';
import {ScrollService} from '../../../../shared/services/scroll.service';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.css']
})
export class WebDevelopmentComponent implements OnInit {
  webDevInfo;
  desc;
  isMobile = false;


  @Input('webDevInfo')
  set webDev_Info(data) {
    if (!data) return;

    this.webDevInfo = data.filter(x => x.title === 'Web Development')[0];
    this.desc = marked(this.webDevInfo.description)
  }

  constructor(private responsiveService: ResponsiveService, private scrollService: ScrollService) {
  }

  ngOnInit() {
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => this.isMobile = isMobile);
  }

}
