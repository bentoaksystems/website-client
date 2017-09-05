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
  lang = 'en';
  height: number;

  constructor(private langService: LanguageService, private windowService: WindowService){}

  ngOnInit(){
    this.height = this.windowService.getWindow().innerHeight - 283;
    this.windowService.getWindow().onresize = (e) => {
      this.height = this.windowService.getWindow().innerHeight - 283;
    };

    this.langService.lang$.subscribe( lang => this.lang = lang );
  }
}
