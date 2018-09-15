import {Component, Inject, OnInit} from '@angular/core';
import * as marked from 'marked';

import {LanguageService} from "../language.service";
import {ContentfulService} from "../contentful.service";
import {WINDOW} from "../window.service";

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
    @Inject(WINDOW) private window) {}

  ngOnInit() {
    this.width = this.window.innerWidth;
    this.window.onresize = (e) => {
      this.width = this.window.innerWidth;
    };

    this.waiting = true;

    this.contentfulService.getProjects()
      .then(res => {
        for (let project of res) {
          let obj = {
            title_en: project.fields.displayNameEn,
            title_fa: project.fields.displayNameFa,
            shortDescription_en: project.fields.shortDescriptionEn,
            shortDescription_fa: project.fields.shortDescriptionFa,
            description_en: marked(project.fields.descriptionEn),
            description_fa: marked(project.fields.descriptionFa),
            mainImage: {
              url: project.fields.mainImage.fields.file.url,
              title: project.fields.mainImage.fields.title
            }
          };

          if (project.fields.screenShots)
            for (let screenShot of project.fields.screenShots)
              obj[screenShot].push({url: screenShot.fields.file.url, title: screenShot.fields.file.title, description: screenShot.fields.file.description});

          this.projects.push(obj);
        }

        this.waiting = false;
      })
      .catch(err => {
        console.log(err);
        err;
      })
  }

}
