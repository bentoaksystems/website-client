import {Component, OnInit} from '@angular/core';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {ResponsiveService} from '../../shared/services/responsive.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  address: any = {};
  phone: any = {};
  email: any = {};
  social: any = {};
  isMobile = false;


  constructor(private getJsonFileService: GetJsonFileService, private responsiveService: ResponsiveService) {
  }

  ngOnInit() {

    this.getJsonFileService.getFooterData()
      .then((details) => {
        this.address = details[0].address;
        this.phone = details[0].phone;
        this.email = details[0].email;
        this.social = details[0].social;
      })
      .catch(err => {
        console.error('Cannot get data!', err);
      });

    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => this.isMobile = isMobile);
  }
}
