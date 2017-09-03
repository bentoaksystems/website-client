import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {LanguageService} from "../language.service";
import {WindowService} from "../window.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('changeLang') changeLang = new EventEmitter();
  height: number = 500;

  constructor(public langService: LanguageService, public windowService: WindowService) { }

  ngOnInit() {
    this.height = this.windowService.getWindow().innerHeight - 283;
    this.windowService.getWindow().onresize = (e) => {
      this.height = this.windowService.getWindow().innerHeight - 283;
    };
  }

  switchLang(){
    this.langService.changeLanguage();
    this.changeLang.emit('changed');
  }
}
