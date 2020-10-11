import {Component, OnInit} from '@angular/core';
import { StartupService } from '../../shared/services/startup.service';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {ResponsiveService} from '../../shared/services/responsive.service';
import { CookiesService } from 'app/shared/services/cookies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerData: any = {};
  isMobile = false;
  languages = ['English', 'Dutch', 'German', 'Persian']
  selectedLanguage = 'English';
  constructor(
    private getJsonFileService: GetJsonFileService,
    private responsiveService: ResponsiveService,
    private startupService: StartupService,
    private cookiesService: CookiesService
    ) {
  }

  ngOnInit() {
    this.selectedLanguage = this.cookiesService.getCookie('language');
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
  async onChange(event) {
    const language = event.target.value;
    await this.startupService.load(language);
    window.location.reload();
    this.cookiesService.setCookie('language', language, 1);
    console.log(this.cookiesService.getCookie('language'));
  }
}
