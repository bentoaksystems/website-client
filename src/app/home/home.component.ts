import {Component, Inject, OnInit} from '@angular/core';

import {ContentfulService} from '../shared/services/contentful.service';
import {LanguageService} from '../shared/services/language.service';
import {WINDOW} from '../shared/services/window.service';
import * as marked from 'marked';
import {GetJsonFileService} from '../shared/services/get-json-file.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  introRes: any = {introFa: '', introEn: ''};
  intro = '';
  lang: string;
  private images_en: any = [];
  private images_fa: any = [];
  images: any = [];
  height: number;
  width: number;
  waiting: boolean = false;
  homeTopSection: any = {};

  constructor(public langService: LanguageService, private contentfulService: ContentfulService,
    @Inject(WINDOW) private window, private getJsonFileService: GetJsonFileService) {}

  ngOnInit() {
    this.langService.lang$.subscribe(lang => {
      this.lang = lang;
      this.images = (this.lang === 'english') ? this.images_en : this.images_fa;
      this.intro = marked((this.langService.lang === 'english') ? this.introRes.introEn : this.introRes.introFa);
    });

    this.waiting = true;

    this.height = this.window.innerHeight - 283;
    this.window.onresize = (e) => {
      this.height = this.window.innerHeight - 283;
    };
    this.width = this.window.innerWidth - 100;
    this.window.onresize = (e) => {
      this.width = this.window.innerWidth - 100;
    };
    this.getJsonFileService.getHomeTopSectionData()
      .then((res: any) => {
        this.homeTopSection = res;
        this.introRes = this.homeTopSection.introRes;
        this.intro = marked((this.langService.lang === 'english') ? this.introRes.introEn : this.introRes.introFa);
        this.waiting = false;
      })
      .catch(err => {
        console.error('Cannot get home data from server: ', err);
      });
  }

  openPage(link) {
    this.window.open(link, '_blank');
  }
}
