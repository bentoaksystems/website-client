import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {LanguageService} from '../shared/services/language.service';
import {GetJsonFileService} from '../shared/services/get-json-file.service';
import {ResponsiveService} from '../shared/services/responsive.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lang: any;
  // height: number = 500;
  // width: number = 500;
  headerData: any = {};
  isMobile = false;

  constructor(public langService: LanguageService, private getJsonFileService: GetJsonFileService, private responsiveService: ResponsiveService) {
  }

  ngOnInit() {
    // this.height = this.window.innerHeight - 250;
    // this.window.onresize = (e) => {
    //   this.height = this.window.innerHeight - 250;
    // };
    // this.width = this.window.innerWidth - 30;
    // this.window.onresize = (e) => {
    //   this.width = this.window.innerWidth - 30;
    // };
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => this.isMobile = isMobile);

    this.langService.lang$.subscribe(lang => this.lang = lang);


    this.getJsonFileService.getHeaderData()
      .then((res: any) => {
        this.headerData = res;
      })
      .catch(err => {
        console.error('Cannot get header data from server: ', err);
      });
  }

  switchLang() {
    this.langService.changeLanguage();
  }
}
