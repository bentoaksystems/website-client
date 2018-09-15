import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';

import {LanguageService} from "../language.service";
import {WINDOW} from "../window.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lang: any;
  height: number = 500;
  width: number = 500;

  constructor(public langService: LanguageService, @Inject(WINDOW) public window) { }

  ngOnInit() {
    this.height = this.window.innerHeight - 250;
    this.window.onresize = (e) => {
      this.height = this.window.innerHeight - 250;
    };
    this.width = this.window.innerWidth - 30;
    this.window.onresize = (e) => {
      this.width = this.window.innerWidth - 30;
    };

    this.langService.lang$.subscribe(lang => this.lang = lang)
  }

  switchLang(){
    this.langService.changeLanguage();
  }
}
