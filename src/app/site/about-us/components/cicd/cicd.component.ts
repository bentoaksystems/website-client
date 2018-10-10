import {Component, Input, OnInit} from '@angular/core';
import * as marked from 'marked';
import {ResponsiveService} from '../../../../shared/services/responsive.service';


@Component({
  selector: 'app-cicd',
  templateUrl: './cicd.component.html',
  styleUrls: ['./cicd.component.css']
})
export class CICDComponent implements OnInit {
  @Input() CICDInfo: any;
  desc = null;
  isMobile = false;

  constructor(private responsiveService: ResponsiveService) {
  }

  ngOnInit() {
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => this.isMobile = isMobile);
    this.desc = marked(this.CICDInfo.description);
  }

}
