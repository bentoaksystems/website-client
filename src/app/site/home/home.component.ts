import {Component, Inject, OnInit} from '@angular/core';
import * as marked from 'marked';
import {ResponsiveService} from '../../shared/services/responsive.service';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {WINDOW} from '../../shared/services/window.service';
import {LanguageService} from '../../shared/services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private images_en: any = [];
  images: any = [];
  waiting = false;
  homeTopSection: any = {};
  slideShows: any = [];
  process: any = [];
  rows = [];
  temp_row = [];
  isMobile = false;
  intro = '';
  step = 0;
  showMoreFlag = false;

  constructor(public langService: LanguageService, @Inject(WINDOW) private window,
              private getJsonFileService: GetJsonFileService, private responsiveService: ResponsiveService) {
  }

  ngOnInit() {
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
        this.chunkArray();
        this.waiting = false;
      })
      .catch(err => {
        console.error('Cannot get data!', err);
      });

    // Our Process section
    this.getJsonFileService.getProcessData()
      .then((res: any) => {
        this.process = res;
        this.waiting = false;
      })
      .catch(err => {
        console.error('Cannot get data from server: ', err);
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

        if (counter >= 6) {
          counter = 0;
          this.rows.push(chunk);
          chunk = [];
        }
      }
    }
    if (counter > 0) {
      this.rows.push(chunk);
    }
    this.temp_row = [[...this.rows[0]]];
  }

  // our Process
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
