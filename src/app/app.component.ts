import {Component, Inject, OnInit} from '@angular/core';
import 'hammerjs';
import {LanguageService} from "./language.service";
import {WINDOW} from "./window.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lang = 'english';
  height: number;

  constructor(private langService: LanguageService, @Inject(WINDOW) private window) {}

  ngOnInit() {
    this.height = this.window.innerHeight - 283;
    this.window.onresize = (e) => {
      this.height = this.window.innerHeight - 283;
    };

    this.langService.lang$.subscribe(lang => this.lang = lang);
  }
}
