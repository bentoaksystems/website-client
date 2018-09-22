import { Component, OnInit } from '@angular/core';
import * as marked from 'marked';
import {LanguageService} from "../shared/services/language.service";
import {ContentfulService} from "../shared/services/contentful.service";
import {GetJsonFileService} from '../shared/services/get-json-file.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  description = {}

  constructor(public langService: LanguageService, private getJsonFileService: GetJsonFileService) { }

  ngOnInit() {
    this.getJsonFileService.getAboutUsData()
      .then((details) => {
        // this.description = details.description;
      })
      .catch(err => {
        console.error('Cannot get data!', err);
      });
  }

}
