import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {DictionaryService} from './dictionary.service';
import { CookiesService } from './cookies.service';


@Injectable()
export class StartupService {
  public _startupData: any;

  constructor(
    private httpService: HttpService,
    private dictionaryService: DictionaryService,
    private cookiesService: CookiesService
  ) {}

  // This is the method you want to call at bootstrap
  // Important: It should return a Promise
  load(name = 'English'): Promise<any> {
    this._startupData = null;
    name = this.cookiesService.getCookie('language');
    return this.httpService.post('dictionary_words', {name: name}).toPromise()
      .then((data: any) => {
        this._startupData = data;
        if (data.name) {
          this.dictionaryService.setLocalization(data.name);
        }
        if (data.direction) {
          this.dictionaryService.setDirection(data.direction);
        }
        if (data.keywords) {
          const dict = {};
          data.keywords.forEach(entry => {
            dict[entry.key_word.toLowerCase()] = entry.value;
          });
          this.dictionaryService.setDictionary(dict);
        }
        if (data.locale_symbol) {
          this.dictionaryService.setLocaleSymbol(data.locale_symbol);
        }
        return Promise.resolve();
      })
      .catch((err: any) => {
        return Promise.resolve();
      });
  }

  get startupData(): any {
    return this._startupData;
  }
}
