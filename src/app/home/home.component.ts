import {Component, Inject, OnInit} from '@angular/core';

import {ContentfulService} from "../shared/services/contentful.service";
import {LanguageService} from "../shared/services/language.service";
import {WINDOW} from "../shared/services/window.service";
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
  technologies_1: any = [];
  technologies_2: any = [];
  slideShows: any = [];


  constructor(public langService: LanguageService, private contentfulService: ContentfulService, private getJsonFileService: GetJsonFileService,
              @Inject(WINDOW) private window) {}

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

    this.contentfulService.getIntro()
      .then(res => {
        this.introRes = res;
        this.intro = marked((this.langService.lang === 'english') ? res.introEn : res.introFa);
      });
    this.getJsonFileService.getTechnologyData()
      .then((res) => {
        console.log('res', res);
        this.slideShows = res;
        let _technologies = res[1].fields.technologies;

        //   .then(res => {
        //   console.log('res', res);
        //   let slideshows = res[0].fields.slideShow;
        //   // let slideshows = JSON.parse(fs.readFileSync('dictionary.json', 'utf8'));
        // )}
        //     let _technologies = res[1].fields.technologies;
        console.log('slideShow', this.slideShows);
        // console.log('technologies',_technologies);

        let maxHeight = 0, maxWidth = 0;

        for (let s of this.slideShows) {
          if (s.fields) {
            let transDSCP = s.fields.description.split('|');
            this.images_en.push({source: s.fields.file.url, alt: transDSCP[0], title: s.fields.title, link: s.fields.url});
            this.images_fa.push({source: s.fields.file.url, alt: transDSCP[1], title: s.fields.title, link: s.fields.url});
          }
        }

        this.images = (this.langService.lang === 'english') ? this.images_en : this.images_fa;

        // for (let index = 0; index < _technologies.length; index++) {
        //   let t = _technologies[index];
        //   if (index < 7)
        //     this.technologies_1.push({source: t.fields.file.url, link: t.fields.description, alt: t.fields.title});
        //   else
        //     this.technologies_2.push({source: t.fields.file.url, link: t.fields.description, alt: t.fields.title});
        // }

        this.waiting = false;
        // .catch(err => {
        //   console.log(err);
        // })

      })
      .catch(err => {
        console.error('Cannot get data!', err);
      });
  }
  openPage(link)
  {
    this.window.open(link, '_blank');
  }
}
