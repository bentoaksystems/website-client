import {Component, Inject, OnInit} from '@angular/core';

import * as marked from 'marked';
import {LanguageService} from '../../shared/services/language.service';
import {ResponsiveService} from '../../shared/services/responsive.service';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {WINDOW} from '../../shared/services/window.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private images_en: any = [];
  images: any = [];
  width: number;
  waiting: boolean = false;
  homeTopSection: any = {};
  slideShows: any = [];
  rows = [];
  isMobile = false;
  intro = '';

  constructor(public langService: LanguageService,
              @Inject(WINDOW) public window, private getJsonFileService: GetJsonFileService, private responsiveService: ResponsiveService) {
  }

  ngOnInit() {
    this.width = this.window.innerWidth;
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });

    this.waiting = true;

    this.getJsonFileService.getHomeTopSectionData()
      .then((res: any) => {
        this.homeTopSection = res;
        this.intro = marked(this.homeTopSection.intro);
        this.waiting = false;
      })
      .catch(err => {
        console.error('Cannot get home data from server: ', err);
      });

    this.getJsonFileService.getTechnologyData()
      .then((res) => {
        this.slideShows = res;
        for (const s of this.slideShows) {
          if (s.title) {
            const transDSCP = s.description;
            this.images_en.push({source: s.file.url, description: transDSCP, title: s.title, link: s.url});
          }
        }

        this.images = this.images_en;
        this.images = this.images = this.chunkArray();
        this.waiting = false;
      })
      .catch(err => {
        console.error('Cannot get data!', err);
      });

  }

  openPage(link) {
    this.window.open(link, '_blank');
  }

  chunkArray() {
    if (this.images.length <= 0) {
      this.rows = [];
      return;
    }
    this.rows = [];
    let chunk = [], counter = 0;
    for (const s in this.images) {
      if (this.images.hasOwnProperty(s)) {
        chunk.push(this.images[s]);
        counter++;

        if (counter >= 3) {
          counter = 0;
          this.rows.push(chunk);
          chunk = [];
        }
      }
    }
    if (counter > 0) {
      this.rows.push(chunk);
    }
  }
}
