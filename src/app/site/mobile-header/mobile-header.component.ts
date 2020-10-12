import {Component, Input, OnInit} from '@angular/core';
import {ResponsiveService} from '../../shared/services/responsive.service';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {Router} from '@angular/router';
import { TranslatorComponent } from '../../shared/components/translator.component';
import { DictionaryService } from '../../shared/services/dictionary.service';
import { StartupService } from '../../shared/services/startup.service';
import { CookiesService } from '../../shared/services/cookies.service';
@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent extends TranslatorComponent implements OnInit {

  headerData: any = {};
  isMobile = false;
  sideNavIsOpen = false;
  array: any = [];
  languages = ['English', 'Dutch', 'German', 'Persian']
  selectedLanguage = 'English';

  constructor(private responsiveService: ResponsiveService,
              private getJsonFileService: GetJsonFileService, private router: Router,
              dictionaryService: DictionaryService,
              private startupService: StartupService,
              private cookiesService: CookiesService) {
                super(dictionaryService);
  }

  ngOnInit() {
    if (this.cookiesService.getCookie('language')) {
      this.selectedLanguage = this.cookiesService.getCookie('language');
    }
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => this.isMobile = isMobile);


    this.getJsonFileService.getHeaderData()
      .then((res: any) => {
        console.log(res);
        this.headerData = res[0];
        for (let i = 0; i < this.headerData.menu_tab.length; i++) {
          if (this.headerData.menu_tab[i].title === 'Home') {
            Object.assign(this.headerData.menu_tab[i], {iconLogo: 'fa fa-home'});
          } else if (this.headerData.menu_tab[i].title === 'People') {
            Object.assign(this.headerData.menu_tab[i], {iconLogo: 'fa fa-user'});
          } else if (this.headerData.menu_tab[i].title === 'Contact') {
            Object.assign(this.headerData.menu_tab[i], {iconLogo: 'fa fa-envelope'});
          } else if (this.headerData.menu_tab[i].title === 'Projects') {
            Object.assign(this.headerData.menu_tab[i], {iconLogo: 'fa fa-desktop'});
          } else if (this.headerData.menu_tab[i].title === 'About us') {
            Object.assign(this.headerData.menu_tab[i], {iconLogo: 'fa fa-file'});
          } else if (this.headerData.menu_tab[i].title === 'Pricing') {
            Object.assign(this.headerData.menu_tab[i], {iconLogo: 'fa fa-usd'});
          }
        }
        this.array = this.headerData.menu_tab.reverse();
      })
      .catch(err => {
        console.error('Cannot get header data from server: ', err);
      });
  }

  navigate(arr) {
    this.router.navigate(arr);
    this.sideNavIsOpen = false;
  }
  onChange(event) {
    const language = event.target.value;
    this.cookiesService.setCookie('language', language, 1);
    this.startupService.load(language);
    window.location.reload();
  }

}
