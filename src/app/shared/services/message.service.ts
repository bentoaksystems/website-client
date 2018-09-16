import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material";

import {LanguageService} from "./language.service";
import {MessageType} from "../enum/message.enum";

@Injectable()
export class MessageService {
  messageType = MessageType;

  constructor(private snackBar: MatSnackBar, private langService: LanguageService) {}

  inform(message) {
    this.showMessage(message, this.messageType.inform);
  }

  error(message) {
    this.showMessage(message, this.messageType.error);
  }

  warn(message) {
    this.showMessage(message, this.messageType.warning);
  }

  private showMessage(message, type) {
    let options = {
      '0': {
        duration: 2000,
        direction: this.langService.lang === 'english' ? 'ltr' : 'rtl',
        extraClasses: ['inform']
      },
      '1': {
        duration: 3000,
        direction: this.langService.lang === 'english' ? 'ltr' : 'rtl',
        extraClasses: ['error']
      },
      '2': {
        duration: 2000,
        direction: this.langService.lang === 'english' ? 'ltr' : 'rtl',
        extraClasses: ['warning']
      }
    };

    this.snackBar.open(message, null, options[type]);
  }
}
