import {Injectable} from '@angular/core';
import * as marked from 'marked';

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
  isEmpty(obj) {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }
  translate(keyword) {
    if (this.isEmpty(keyword)) {
      return;
    }
    if (!keyword && keyword !== 0) {
      return;
    }
    // console.log(keyword);
    if (+keyword + '' === keyword + '') {
      return (+keyword).toLocaleString(this.locale_symbol);
    } else {
      const found = this.dictionary[('' + keyword).toLowerCase()];
      if (found) {
        if (found.includes('/n')) {
          return marked(found.replace(/\/n/g, '\n'));
        }
        // return found;
        return found.replace(/\/n/g, '\n');

      }
    }
    if (keyword.includes('/n')) {
      return marked(keyword.replace(/\/n/g, '\n'));
    }
    // return keyword;
    return keyword.replace(/\/n/g, '\n');

  }
}
