import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LanguageService {
  lang: string = 'en';       // Two options: (en: English, fa: Farsi/Persian)
  private langSubject = new BehaviorSubject<string>('en');
  lang$: Observable<string> = this.langSubject.asObservable();

  private _translation = {
    'tel - uk: ': 'تلفن انگلستان: ',
    'tel - ir: ': 'تلفن ایران: ',
    'contact': 'تماس با ما',
    'about us': 'درباره ما',
    'people': 'افراد',
    'projects': 'پروژه ها',
    'all rights reserved for bentoaksystems': 'تمامی حقوق سایت متعلق به شرکت سامانه های بنتوک می باشد',
    'follow us in ': 'ما را دنبال کنید در',
    'best technologies, less time': 'بهترین تکنولوژی ها، کمترین زمان',
    'the only limit to your impact is your imagination and commitment': 'تنها محدودیت مؤثر بر شما، تصورات و تعهداتتان است',
    'tony robbins': 'تونی رابینز',
    'trust us to make better world': 'به ما اعتماد کنید تا دنیایی بهتر بسازیم',
    'more...': 'بیشتر...',
    'you can see my skills and experience at linkedin ': 'شما می توانید تجربیات و مهارت های من را در LinkedIn ببینید',
    'my favorites are ': 'علاقه مندی های من ',
    'contact me': 'راه های ارتباط با من',
    'email: ': 'ایمیل: ',
    'phone: ': 'تلفن: ',
    'bent oak systems': 'بُنتوک سامانـه',
  };

  constructor() {
  }

  changeLanguage() {
    this.lang = (this.lang === 'en') ? 'fa' : 'en';
    this.langSubject.next(this.lang);
  }

  translate(value: string) {
    if (this.lang === 'en') {
      return value;
    } else if (this._translation[value.toLowerCase()]) {
      return this._translation[value.toLowerCase()];
    } else {
      return value;
    }
  }
}
