import {Component, Inject, OnInit} from '@angular/core';
import * as marked from 'marked';

import {WINDOW} from '../../shared/services/window.service';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {ResponsiveService} from '../../shared/services/responsive.service';
import {SpinnerService} from '../../shared/services/spinner.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any = [];
  details: any = [];
  width: number;
  isMobile = false;

  constructor(private getJsonFileService: GetJsonFileService, private responsiveService: ResponsiveService,
              @Inject(WINDOW) private window, private spinnerService: SpinnerService) {
  }

  ngOnInit() {
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });

    this.spinnerService.enable();

    this.getJsonFileService.getProjectData()
      .then(res => {
        this.details = res;
        for (const project of this.details) {
          const obj = {
            title: project.displayName,
            shortDescription: project.shortDescription,
            description: marked(project.description),
            mainImage: {
              url: project.mainImage.url,
              title: project.mainImage.title
            }
          };
          this.projects.push(obj);
        }

        this.spinnerService.disable();
      })
      .catch(err => {
        console.log(err);
      })
  }

}
