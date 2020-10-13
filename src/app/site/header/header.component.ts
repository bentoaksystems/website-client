import {Component, OnInit} from '@angular/core';
import { StartupService } from '../../shared/services/startup.service';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {ResponsiveService} from '../../shared/services/responsive.service';
import { CookiesService } from 'app/shared/services/cookies.service';
import { DictionaryService } from '../../shared/services/dictionary.service';
import { TranslatorComponent } from '../../shared/components/translator.component';
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
  constructor(
    private getJsonFileService: GetJsonFileService,
    private responsiveService: ResponsiveService,
    private startupService: StartupService,
    private cookiesService: CookiesService,
    dictionaryService: DictionaryService
    ) {
      super(dictionaryService);
  }

  ngOnInit() {
    if (this.cookiesService.getCookie('language')) {
      this.selectedLanguage = this.cookiesService.getCookie('language');
    }
    console.log(this.selectedLanguage);
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
    this.cookiesService.setCookie('language', language, 1);
    this.startupService.load(language);
    window.location.reload();
  }
}
