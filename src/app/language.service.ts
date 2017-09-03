import { Injectable } from '@angular/core';

@Injectable()
export class LanguageService {
  private _direction: string = 'ltr'; //Left to right (ltr) or right to left (rtl)
  private _lang: string = 'en';       //Two options: (en: English, fa: Farsi/Persian)
  private _fontFamily: string = 'times new roman'; //For persian fonts it is gulf

  private _translation = {
    "tel - uk: ": 'تلفن انگلستان: ',
    "tel - ir: ": 'تلفن ایران: ',
    "contact": 'تماس با ما',
    "about": "درباره ما",
    "people": "افراد",
    "projects": "پروژه ها",
    "all rights reserved for bentoaksystems": "تمامی حقوق سایت متعلق به شرکت سامانه های بنتوک می باشد",
    "follow us in ": "ما را دنبال کنید در",
    "best technologies, less time": "بهترین تکنولوژی ها، کمترین زمان",
    "the only limit to your impact is your imagination and commitment": "تنها محدودیت مؤثر بر شما، تصورات و تعهداتتان است",
    "tony robbins": "تونی رابینز",
    "trust us to make better world": "به ما اعتماد کنید تا دنیایی بهتر بسازیم",
    "more...": "بیشتر...",
    "you can see my skills and experience at linkedin ": "شما می توانید تجربیات و مهارت های من را در LinkedIn ببینید",
    "my favorites are ": "علاقه مندی های من ",
    "contact me": "راه های ارتباط با من",
    "email: ": "ایمیل: ",
    "phone: ": "تلفن: ",
  };

  constructor() { }

  changeLanguage(){
    this._lang = (this._lang === 'en') ? 'fa' : 'en';
    this._direction = (this._direction === 'ltr') ? 'rtl' : 'ltr';
    this._fontFamily = (this._direction === 'ltr') ? 'times new roman' : 'gulf';
  }

  translate(value: string){
    if(this._lang === 'en')
      return value;
    else
      if(this._translation[value.toLowerCase()])
        return this._translation[value.toLowerCase()];
      else
        return value;
  }

  getDirection(){
    return this._direction;
  }

  getFontFamily(){
    return this._fontFamily;
  }
}
