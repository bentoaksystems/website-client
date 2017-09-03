import { Component, OnInit } from '@angular/core';
import {Entry} from 'contentful';

import {ContentfulService} from "../contentful.service";
import {LanguageService} from "../language.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  address: any = {};
  phone: any = {};

  constructor(private contentfulService: ContentfulService, public langService: LanguageService) { }

  ngOnInit() {
    this.contentfulService.getContactData()
      .then(details => {
        this.address.en = details[0].fields.addressEn;
        this.address.fa = details[0].fields.addressFa;
        this.phone.uk = details[0].fields.phoneUk;
        this.phone.ir = details[0].fields.phoneIr;
      })
  }

  openLinkedIn(){
    window.open('http://linkedin.com', '_blank');
  }
}
