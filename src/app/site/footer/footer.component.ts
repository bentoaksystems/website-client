import {Component, OnInit} from '@angular/core';
import {Entry} from 'contentful';
import {LanguageService} from '../../shared/services/language.service';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  address: any = {};
  phone: any = {};
  email: any = {};

  constructor(public langService: LanguageService, private getJsonFileService: GetJsonFileService) {
  }

  ngOnInit() {

    this.getJsonFileService.getFooterData()
      .then((details) => {
        this.address = details[0].address;
        this.phone = details[0].phone;
        this.email = details[0].email;
      })
      .catch(err => {
        console.error('Cannot get data!', err);
      });
  }

  openLinkedIn() {
    window.open('http://linkedin.com', '_blank');
  }
}
