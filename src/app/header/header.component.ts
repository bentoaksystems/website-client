import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';

import {LanguageService} from '../shared/services/language.service';
import {WINDOW} from '../shared/services/window.service';
import {HttpService} from '../shared/services/http.service';
import {GetJsonFileService} from '../shared/services/get-json-file.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lang: any;
  height: number = 500;
  width: number = 500;
  headerData: any = {};

  constructor(public langService: LanguageService, @Inject(WINDOW) public window, private getJsonFileService: GetJsonFileService) {
  }

  ngOnInit() {
    this.height = this.window.innerHeight - 250;
    this.window.onresize = (e) => {
      this.height = this.window.innerHeight - 250;
    };
    this.width = this.window.innerWidth - 30;
    this.window.onresize = (e) => {
      this.width = this.window.innerWidth - 30;
    };

    this.langService.lang$.subscribe(lang => this.lang = lang);


    this.getJsonFileService.getHeaderData()
      .then((res: any) => {
        this.headerData = res;
      })
      .catch(err => {
        console.error('Cannot get data: ', err);
      });
  }

  switchLang() {
    this.langService.changeLanguage();
  }
}
