import {Injectable} from '@angular/core';

@Injectable()
export class DictionaryService {
  private locale;
  private dictionary = {};
  private dir;
  private locale_symbol = 'en';

  constructor() {}

  setDirection(dir: any): any {
    this.dir = dir;
  }
  getDirection() {
    return this.dir;
  }
  setLocaleSymbol(nf: any): any {
    this.locale_symbol = nf;
  }
  getLocaleSymbol() {
    return this.locale_symbol;
  }
  getLocalization(locale) {
    return this.locale;
  }
  setLocalization(locale) {
    this.locale = locale;
  }
  setDictionary(values) {
    this.dictionary = values;
  }
  translate(keyword) {
    if (!keyword && keyword !== 0) {
      return;
    }
    if (+keyword + '' === keyword + '') {
      return (+keyword).toLocaleString(this.locale_symbol);
    } else {
      const found = this.dictionary[('' + keyword).toLowerCase()];
      if (found) {
        return found;
      }
    }
    return keyword;
  }
}
