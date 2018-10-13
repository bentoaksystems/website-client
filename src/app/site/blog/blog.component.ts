import {Component, Inject, OnInit} from '@angular/core';
import * as marked from 'marked';
import {ResponsiveService} from '../../shared/services/responsive.service';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {WINDOW} from '../../shared/services/window.service';
import {LanguageService} from '../../shared/services/language.service';
import {SpinnerService} from '../../shared/services/spinner.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  private images_en: any = [];
  images: any = [];
  slideShows: any = [];
  process: any = [];
  rows = [];
  temp_row = [];
  isMobile = false;
  intro = '';
  showMoreFlag = false;

  constructor(public langService: LanguageService, @Inject(WINDOW) private window,
              private getJsonFileService: GetJsonFileService, private responsiveService: ResponsiveService, private spinnersService: SpinnerService) {
  }

  ngOnInit() {
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });

    this.spinnersService.enable();

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
        this.images = this.chunkArray();
        this.spinnersService.disable();
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
    this.temp_row = [[...this.rows[0]],[...this.rows[1]]];
  }


}
