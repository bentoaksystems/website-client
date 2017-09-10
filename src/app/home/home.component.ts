import { Component, OnInit } from '@angular/core';

import {ContentfulService} from "../contentful.service";
import {LanguageService} from "../language.service";
import {WindowService} from "../window.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lang: string;
  private images_en: any = [];
  private images_fa: any = [];
  images: any = [];
  height: number;
  width: number;
  waiting: boolean = false;
  technologies_1: any = [];
  technologies_2: any = [];

  constructor(public langService: LanguageService, private contentfulService: ContentfulService,
              private windowService: WindowService) { }

  ngOnInit() {
    this.langService.lang$.subscribe(lang => {
      this.lang = lang;
      this.images = (this.lang === 'english') ? this.images_en : this.images_fa;
    });

    this.waiting = true;

    this.height = this.windowService.getWindow().innerHeight - 283;
    this.windowService.getWindow().onresize = (e) => {
      this.height = this.windowService.getWindow().innerHeight - 283;
    };
    this.width = this.windowService.getWindow().innerWidth - 100;
    this.windowService.getWindow().onresize = (e) => {
      this.width = this.windowService.getWindow().innerWidth - 100;
    };

    this.contentfulService.getHomeData()
      .then(res => {
        let slideshows = res[0].fields.slideShow;
        let _technologies = res[1].fields.technologies;

        let maxHeight = 0, maxWidth = 0;

        for(let s of slideshows) {
          if (s.fields) {
            let transDSCP = s.fields.description.split('|');

            this.images_en.push({source: s.fields.file.url, alt: transDSCP[0], title: s.fields.title});
            this.images_fa.push({source: s.fields.file.url, alt: transDSCP[1], title: s.fields.title});
          }
        }

        this.images = (this.langService.lang === 'english') ?  this.images_en : this.images_fa;

        for(let index = 0; index < _technologies.length; index++){
          let t = _technologies[index];
          if(index < 7)
            this.technologies_1.push({source: t.fields.file.url, link: t.fields.description, alt: t.fields.title});
          else
            this.technologies_2.push({source: t.fields.file.url, link: t.fields.description, alt: t.fields.title});
        }

        this.waiting = false;
      })
      .catch(err => {
        console.log(err);
      })
  }

  openPage(link){
    this.windowService.getWindow().open(link, '_blank');
  }
}
