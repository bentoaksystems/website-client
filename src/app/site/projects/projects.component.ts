import {Component, Inject, OnInit} from '@angular/core';
import * as marked from 'marked';

import {LanguageService} from "../../shared/services/language.service";
import {WINDOW} from "../../shared/services/window.service";
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {ResponsiveService} from '../../shared/services/responsive.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any = [];
  details: any = [];
  width: number;
  waiting: boolean = false;
  isMobile = false;

  constructor(public langService: LanguageService, private getJsonFileService: GetJsonFileService, private responsiveService: ResponsiveService,
  @Inject(WINDOW) private window) {}

  ngOnInit() {
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });

    this.waiting = true;

    this.getJsonFileService.getProjectData()
      .then(res => {
        this.details = res;
        for (let project of this.details) {
          let obj = {
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

        this.waiting = false;
      })
      .catch(err => {
        console.log(err);
      })
  }

}
