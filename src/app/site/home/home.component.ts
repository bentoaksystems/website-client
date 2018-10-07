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
  images: any = [];
  waiting = false;
  homeTopSection: any = {};
  slideShows: any = [];
  process: any = [];
  less_images = [];
  more_images = [];
  isMobile = false;
  intro = '';
  step = 0;
  showMoreFlag = false;
  isCollapsed=true;

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
            this.images.push({source: s.file.url, description: s.description, title: s.title, link: s.url});
          }
        }
        for (let i = 0; i < 4; i++) {
          this.less_images.push(this.images[i]);
        }
        this.images.splice(0,5);
        

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
