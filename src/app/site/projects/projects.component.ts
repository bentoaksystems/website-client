import {Component, Inject, OnInit} from '@angular/core';
import * as marked from 'marked';

import {LanguageService} from "../../shared/services/language.service";
import {ContentfulService} from "../../shared/services/contentful.service";
import {WINDOW} from "../../shared/services/window.service";
import {GetJsonFileService} from '../../shared/services/get-json-file.service';

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

  constructor(public langService: LanguageService, private getJsonFileService: GetJsonFileService,
    @Inject(WINDOW) private window) {}

  ngOnInit() {
    this.width = this.window.innerWidth;
    this.window.onresize = (e) => {
      this.width = this.window.innerWidth;
    };

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
         // console.log('obj: ',obj);
          this.projects.push(obj);
        }

        this.waiting = false;
      })
      .catch(err => {
        console.log(err);
      })
  }

}
