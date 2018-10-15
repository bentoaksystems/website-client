import {Component, Input, OnInit} from '@angular/core';
import {ResponsiveService} from '../../../../shared/services/responsive.service';
import * as marked from 'marked';

@Component({
  selector: 'app-software-development',
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.css']
})
export class SoftwareDevelopmentComponent implements OnInit {
  softwareDevInfo;
  desc;
  isMobile = false;

  @Input('softwareDevInfo') set softwareDev_Info (data) {
    if(!data) return;

    this.softwareDevInfo = data.filter(x => x.title === 'Software Development')[0];
    this.desc = marked(this.softwareDevInfo.description)
  }

  constructor(private responsiveService: ResponsiveService) {
  }

  ngOnInit() {
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => this.isMobile = isMobile);
  }
}
