import {Component, OnInit} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InputType} from '../../shared/enum/input.enum';

import {HttpService} from '../../shared/services/http.service';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {MessageService} from '../../shared/services/message.service';
import {ResponsiveService} from '../../shared/services/responsive.service';
import {PricingService} from '../../shared/services/pricing.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  address: any = {};
  phone: any = {};
  emailAddress: any = {};
  isMobile = false;
  seen = {};
  curFocus = null;


  constructor(private httpService: HttpService, private getJsonFileService: GetJsonFileService,
              private msgService: MessageService, private responsiveService: ResponsiveService, private pricingService: PricingService) {
  }

  ngOnInit() {
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });
    this.initForm();

    this.getJsonFileService.getFooterData()
      .then((details) => {
        this.address = details[0].address;
        this.phone = details[0].phone;
        this.emailAddress = details[0].email;
      })
      .catch(err => {
        console.error('Cannot get data!', err);
      });
  }

  initForm() {
    this.contactForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null),
      phoneNumber: new FormControl(null, [Validators.required]),
      content: new FormControl(null)
    });
  }

  setSeen(item) {
    this.seen[item] = true;
    this.curFocus = item;
  }

  send() {
    const customerOfferObj = {
      email: this.contactForm.controls['email'].value,
      name: this.contactForm.controls['name'].value,
      phoneNumber: this.contactForm.controls['phoneNumber'].value,
      content: this.contactForm.controls['content'].value,
      selectedPricingInfo : this.pricingService.pricingInfo,
    };


    this.httpService.post('contact', customerOfferObj).subscribe(
      (res) => {
        console.log('===>>', customerOfferObj);
        this.msgService.inform('Your message has been sent. We response you as soon as possible. Thanks');
        this.contactForm.controls['email'].setValue(null);
        this.contactForm.controls['name'].setValue(null);
        this.contactForm.controls['phoneNumber'].setValue(null);
        this.contactForm.controls['content'].setValue(null);
        this.pricingService.pricingInfo = {};
        this.seen['email'] = false;
        this.seen['phoneNumber'] = false;
      },
      (err) => {
        this.msgService.error('Cannot send your message. Check your connection and try again.');
      }
    );
  }

}
