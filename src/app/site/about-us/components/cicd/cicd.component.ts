import {Component, Input, OnInit} from '@angular/core';
import * as marked from 'marked';
import {ResponsiveService} from '../../../../shared/services/responsive.service';

@Component({
  selector: 'app-cicd',
  templateUrl: './cicd.component.html',
  styleUrls: ['./cicd.component.css']
})
export class CICDComponent implements OnInit {
  CICDInfo;
  desc;
  isMobile = false;


  @Input('CICDInfo') set CICD_Info (data) {
    if(!data) return;

    this.CICDInfo = data.filter(x => x.title === 'CI/CD')[0];
    this.desc = marked(this.CICDInfo.description)
  };

  constructor(private responsiveService: ResponsiveService) {
  }

  ngOnInit() {
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => this.isMobile = isMobile);
  }

}
