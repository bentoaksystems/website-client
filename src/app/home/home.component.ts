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
  images: any = [];
  height: number;
  waiting: boolean = false;
  technologies: any = [];

  constructor(public langService: LanguageService, private contentfulService: ContentfulService,
              private windowService: WindowService) { }

  ngOnInit() {
    this.waiting = true;

    this.height = this.windowService.getWindow().innerHeight - 283;
    this.windowService.getWindow().onresize = (e) => {
      this.height = this.windowService.getWindow().innerHeight - 283;
      console.log('home height: ', this.height);
    };

    console.log('home height: ', this.height);

    this.contentfulService.getHomeData()
      .then(res => {
        console.log(res);
        let slideshows = res[0].fields.slideShow;
        let _technologies = res[1].fields.technologies;
        for(let s of slideshows)
          this.images.push({source: s.fields.file.url, alt: s.fields.description, title: s.fields.title});

        for(let t of _technologies)
          this.technologies.push({source: t.fields.file.url, link: t.fields.description, alt: t.fields.title});

        this.waiting = false;
      })
      .catch(err => {
        console.log(err);
      })
  }
}
