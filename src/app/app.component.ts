import {Component, OnInit} from '@angular/core';
import 'hammerjs';
import {LanguageService} from "./language.service";
import {WindowService} from "./window.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  fontFamily: string;
  height: number;

  constructor(private langService: LanguageService, private windowService: WindowService){}

  ngOnInit(){
    this.height = this.windowService.getWindow().innerHeight - 283;
    this.windowService.getWindow().onresize = (e) => {
      this.height = this.windowService.getWindow().innerHeight - 283;
    };

    this.changeLang();
  }

  changeLang(){
    this.fontFamily = this.langService.getFontFamily();
  }
}
