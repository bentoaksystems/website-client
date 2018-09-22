import { Component, OnInit } from '@angular/core';
import * as marked from 'marked';
import {LanguageService} from '../shared/services/language.service';
import {ContentfulService} from '../shared/services/contentful.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  description = {
    en: null,
    fa: null
  };

  constructor(public langService: LanguageService, private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getAbout()
      .then(res => {
        console.log('res',res);
        this.description.en = marked(res[0].fields.descriptionEn);
        this.description.fa = marked(res[0].fields.descriptionFa);
      });
  }

}
