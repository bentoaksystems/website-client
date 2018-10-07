import {Component, OnInit} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InputType} from '../../shared/enum/input.enum';

import {HttpService} from '../../shared/services/http.service';
import {GetJsonFileService} from '../../shared/services/get-json-file.service';
import {MessageService} from '../../shared/services/message.service';
import {ResponsiveService} from '../../shared/services/responsive.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  inputType = InputType;
  emailClass = 'english-style';
  nameClass = 'english-style';
  contentClass = 'english-style';
  address: any = {};
  phone: any = {};
  emailAddress: any = {};
  isMobile = false;
  waiting = false;



  constructor(private httpService: HttpService, private getJsonFileService: GetJsonFileService,
              private msgService: MessageService, private responsiveService: ResponsiveService) {
  }

  ngOnInit() {
    this.isMobile = this.responsiveService.isMobile;
    this.responsiveService.switch$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });
    this.contactForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null),
      content: new FormControl(null, [Validators.required])
    });

    this.waiting = true;

    this.getJsonFileService.getFooterData()
      .then((details) => {
        this.address = details[0].address;
        this.phone = details[0].phone;
        this.emailAddress = details[0].email;
        this.waiting = false;
      })
      .catch(err => {
        console.error('Cannot get data!', err);
      });
  }


  send() {
    const obj = {
      email: this.contactForm.controls['email'].value,
      name: this.contactForm.controls['name'].value,
      content: this.contactForm.controls['content'].value
    };

    this.httpService.post('contact', obj).subscribe(
      (res) => {
        this.msgService.inform('Your message has been sent. We response you as soon as possible. Thanks');
        this.contactForm.controls['email'].setValue(null);
        this.contactForm.controls['name'].setValue(null);
        this.contactForm.controls['content'].setValue(null);
      },
      (err) => {
        this.msgService.error('Cannot send your message. Check your connection and try again.');
      }
    );
  }

  changeInput(type, value) {
    const item = value.charCodeAt(0);

    switch (type) {
      case this.inputType.email:
        if (item >= 32 && item <= 126) {
          this.emailClass = 'english-style';
        } else {
          this.emailClass = 'farsi-style';
        }
        break;
      case this.inputType.name:
        if (item >= 32 && item <= 126) {
          this.nameClass = 'english-style';
        } else {
          this.nameClass = 'farsi-style';
        }
        break;
      case this.inputType.content:
        if (item >= 32 && item <= 126) {
          this.contentClass = 'english-style';
        } else {
          this.contentClass = 'farsi-style';
        }
        break;
    }
  }
}
