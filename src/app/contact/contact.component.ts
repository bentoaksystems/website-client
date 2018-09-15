import { Component, OnInit } from '@angular/core';

import {LanguageService} from "../language.service";
import {MessageService} from "../message.service";
import {HttpService} from "../http.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  email = '';
  name: string = '';
  content: string = '';

  constructor(public langService: LanguageService, private msgService: MessageService,
              private httpService: HttpService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null),
      content: new FormControl(null, [Validators.required])
    });
  }

  send(){
    //Check the form

    let obj = {
      email: this.email,
      name: this.name,
      content: this.content
    };

    this.httpService.postData('contact', obj).subscribe(
      (res) => {
        this.msgService.inform(this.langService.translate('Your message has been sent. We response you as soon as possible. Thanks'));
        this.email = null;
        this.name = null;
        this.content = null;
      },
      (err) => {
        this.msgService.error(this.langService.translate('Cannot send your message. Check your connection and try again.'));
      }
    );
  }
}
