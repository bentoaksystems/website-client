import {Component} from '@angular/core';
import {DictionaryService} from '../services/dictionary.service';
import * as persianJS from 'persianjs';

@Component({
  selector: 'app-translator',
  template: '',
  styles: ['']
})
export class TranslatorComponent {
  direction: any = 'ltr';
  text: String;

  constructor(protected dictionaryService: DictionaryService) {
    this.direction = this.dictionaryService.getDirection();
  }

  trl(keyword, concatMessage = '') {
    const trl =  this.dictionaryService.translate(keyword) || keyword;
    return trl + ' ' + concatMessage;
  }
  toLocaleString(data) {
    if (!data && data !== 0) {
      return '';
    }
    if (this.dictionaryService.getLocaleSymbol() === 'fa') {
      return persianJS(data.toString()).englishNumber().toString();
    }

    return data.toLocaleString(this.dictionaryService.getLocaleSymbol(), {
      useGrouping: false,
    });
  }
  toLocaleCurrencyFormat(data) {
    if (!data) {
      return '';
    }
    const plainData = data.replace(/,/g, '');
    if (!Number(plainData)) {
      return data;
    }
    return Number(plainData).toLocaleString('en');
  }
}
