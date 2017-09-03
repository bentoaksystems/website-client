import { Component, OnInit } from '@angular/core';

import {LanguageService} from "../language.service";
import {ContentfulService} from "../contentful.service";
import {WindowService} from "../window.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any = [];
  width: number;
  waiting: boolean = false;

  constructor(public langService: LanguageService, private contentfulService: ContentfulService,
              private windowService: WindowService) { }

  ngOnInit() {
    this.width = this.windowService.getWindow().innerWidth;
    this.windowService.getWindow().onresize = (e) => {
      this.width = this.windowService.getWindow().innerWidth;
    };

    this.waiting = true;

    this.contentfulService.getProjects()
      .then(res => {
        console.log(res);
        for(let project of res){
          this.projects.push({
            name_en: project.fields.displayNameEn,
            name_fa: project.fields.displayNameFa,
            description_en: project.fields.descriptionEn,
            description_fa: project.fields.descriptionFa,
            mainImage: {
              url: project.fields.mainImage.fields.file.url,
              title: project.fields.mainImage.fields.title
            }
          });
        }

        this.waiting = false;
      })
      .catch(err => {
        console.log(err);
        err;
      })
  }

}
