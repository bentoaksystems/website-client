import { Component, OnInit } from '@angular/core';

import {LanguageService} from "../language.service";
import {ContentfulService} from "../contentful.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  email: string = '';
  linkedin: string = '';
  location: any;
  address = {
    en: null,
    fa: null
  };
  phone = {
    uk: null,
    ir: null
  };

  constructor(public langService: LanguageService, private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getContactData()
      .then(details => {
        this.address.en = details[0].fields.addressEn;
        this.address.fa = details[0].fields.addressFa;
        this.phone.uk = details[0].fields.phoneUk;
        this.phone.ir = details[0].fields.phoneIr;
        this.email = details[0].fields.email;
        this.linkedin = details[0].fields.linkedin;
        this.location = details[0].fields.location;
      });
  }

}
