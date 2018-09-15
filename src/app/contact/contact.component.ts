import {Component, OnInit} from '@angular/core';

import {LanguageService} from "../language.service";
import {MessageService} from "../message.service";
import {HttpService} from "../http.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {InputType} from "../enum/input.enum";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  inputType = InputType;
  emailClass: string = 'english-style';
  nameClass: string = 'english-style';
  contentClass: string = 'english-style';

  constructor(public langService: LanguageService, private msgService: MessageService,
    private httpService: HttpService) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null),
      content: new FormControl(null, [Validators.required])
    });
  }

  send() {
    let obj = {
      email: this.contactForm.controls['email'].value,
      name: this.contactForm.controls['name'].value,
      content: this.contactForm.controls['content'].value
    };

    this.httpService.post('contact', obj).subscribe(
      (res) => {
        this.msgService.inform(this.langService.translate('Your message has been sent. We response you as soon as possible. Thanks'));
        this.contactForm.controls['email'].setValue(null);
        this.contactForm.controls['name'].setValue(null);
        this.contactForm.controls['content'].setValue(null);
      },
      (err) => {
        this.msgService.error(this.langService.translate('Cannot send your message. Check your connection and try again.'));
      }
    );
  }

  changeInput(type, value) {
    let item = value.charCodeAt(0);

    switch (type) {
      case this.inputType.email: {
        if (item >= 32 && item <= 126)
          this.emailClass = 'english-style';
        else
          this.emailClass = 'farsi-style';
      }
        break;

      case this.inputType.name: {
        if (item >= 32 && item <= 126)
          this.nameClass = 'english-style';
        else
          this.nameClass = 'farsi-style';
      }
        break;

      case this.inputType.content: {
        if (item >= 32 && item <= 126)
          this.contentClass = 'english-style';
        else
          this.contentClass = 'farsi-style';
      }
        break;
    }
  }
}
