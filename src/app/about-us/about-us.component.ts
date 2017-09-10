import { Component, OnInit } from '@angular/core';

import {LanguageService} from "../language.service";
import {ContentfulService} from "../contentful.service";

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
        this.description.en = res[0].fields.descriptionEn;
        this.description.fa = res[0].fields.descriptionFa;
      });
  }

}
