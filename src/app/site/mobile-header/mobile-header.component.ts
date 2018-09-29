import {Component, Input, OnInit} from '@angular/core';
import {ResponsiveService} from '../../shared/services/responsive.service';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {

  headerData: any = {};
  isMobile = false;
  sideNavIsOpen = false;
  array: any = [];

  constructor(private responsiveService: ResponsiveService,
              private getJsonFileService: GetJsonFileService, private router: Router) {
  }

  ngOnInit() {
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => this.isMobile = isMobile);


    this.getJsonFileService.getHeaderData()
      .then((res: any) => {
        this.headerData = res;
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

}
