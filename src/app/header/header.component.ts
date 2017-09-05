import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {LanguageService} from "../language.service";
import {WindowService} from "../window.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lang: any;
  height: number = 500;

  constructor(public langService: LanguageService, public windowService: WindowService) { }

  ngOnInit() {
    this.height = this.windowService.getWindow().innerHeight - 250;
    this.windowService.getWindow().onresize = (e) => {
      this.height = this.windowService.getWindow().innerHeight - 250;
    };
    this.langService.lang$.subscribe(lang => this.lang = lang)
  }

  switchLang(){
    this.langService.changeLanguage();
  }
}
