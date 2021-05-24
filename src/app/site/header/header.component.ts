import {Component, OnInit} from '@angular/core';
import { StartupService } from '../../shared/services/startup.service';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {ResponsiveService} from '../../shared/services/responsive.service';
import { CookiesService } from 'app/shared/services/cookies.service';
import { DictionaryService } from '../../shared/services/dictionary.service';
import { TranslatorComponent } from '../../shared/components/translator.component';
import { Router } from '@angular/router';
import { LanguageService } from 'app/shared/services/language.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends TranslatorComponent implements OnInit {
  headerData: any = {};
  isMobile = false;
  languages = ['English', 'German'];
  selectedLanguage = 'English';
  homePath = '/en/home';

  constructor(
    private getJsonFileService: GetJsonFileService,
    private responsiveService: ResponsiveService,
    private startupService: StartupService,
    private cookiesService: CookiesService,
    dictionaryService: DictionaryService,
    private router:Router,
    private langService:LanguageService
    ) {
      super(dictionaryService);
  }

  ngOnInit() {
    // if (this.cookiesService.getCookie('language')) {
    //   this.selectedLanguage = this.cookiesService.getCookie('language');
    // }
    this.setLanguage();
    
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => this.isMobile = isMobile);

    this.getJsonFileService.getHeaderData()
      .then((res: any) => {
        this.headerData = res[0];
      })
      .catch(err => {
        console.error('Cannot get header data from server: ', err);
      });
  }
  onChange(event) {
    const language = event.target.value;
    this.selectedLanguage = language;
    let path = this.router.url;

    if (this.router.url.includes('/en/') && this.selectedLanguage === 'German') {
      this.router.navigate([path.replace('/en/', '/de/')]);
    } else if (this.router.url.includes('/de/') && this.selectedLanguage === 'English') {
      this.router.navigate([path.replace('/de/', '/en/')]);
    }
    
    this.cookiesService.setCookie('language', language, 1);
    this.startupService.load(language);
    this.setLanguage();
    // window.location.reload();
  }

  setLanguage() {
    this.selectedLanguage = this.langService.getLanguage()
    if (this.selectedLanguage === 'English') this.homePath = '/en/home';
    else if (this.selectedLanguage === 'German') this.homePath = '/de/home';
  }

  onNavigate(item) {
    this.router.navigate([this.langService.getNavigationLink(item.router_link)]);
  }
}
