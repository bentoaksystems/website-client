import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LanguageService {
  private _lang = 'english';
  get lang(): string{
    return this._lang;
  }

  set lang(data: string){
    this._lang = data;
    localStorage.setItem('lang', data);
  }

  private langSubject = new BehaviorSubject<string>('english');
  lang$: Observable<string> = this.langSubject.asObservable();

  private _translation = {
    'tel - uk: ': 'تلفن انگلستان: ',
    'tel - ir: ': 'تلفن ایران: ',
    'contact': 'تماس با ما',
    'about us': 'درباره ما',
    'people': 'افراد',
    'projects': 'پروژه ها',
    'all rights reserved for bent oak systems': 'تمامی حقوق سایت متعلق به شرکت بنتوک سامانه می باشد',
    'follow us in ': 'صفحه ما در',
    'more...': 'بیشتر...',
    'you can see my skills and experience at linkedin ': 'شما می توانید تجربیات و مهارت های من را در LinkedIn ببینید',
    'my favorites are ': 'علاقه مندی های من ',
    'contact me': 'راه های ارتباط با من',
    'email: ': 'ایمیل: ',
    'phone: ': 'تلفن: ',
    'bent oak systems': 'بُنـتوک سـامانه',
    'you can contact us via': 'شما می توانید به کمک یکی از راه های زیر با ما در تماس باشید',
    'our toolbox': 'ابزارهای ما',
    'be of the web, not behind the web!': 'به جای پشت وب بودن، جزوی از وب باشید.',
    'ian robinson':'یان رابینسون',
    'decades of progress in information and communicati':'دهه‌ها رشد در فناوری اطلاعات و ارتباطات باعث شده ساختار وب، محاسبات به شکل موبایل و اجتماعی، و حجم عظیمی از نرم‌افزارهای متن‌باز در اختیار آدم‌های خلاق قرار بگیرد. چیزی که تا چند سال قبل قابل تصور نبود.',
    'modern apps are combination of all these possibili':'اپلیکیشن‌های امروزی ترکیبی از تمام این امکانات هستند که در یک ابزار خوش‌دست برای کاربرد روزانه فشرده شده است.',
    'in bent oak systems we strive to create good apps ':'در بُنـتوک سـامانه کوشش ما در ساختن اپ خوب برای مشتری است. ما اپلیکیشن را روی وب، و روی محیط‌های کاربری مختلف موبایل می‌سازیم؛ . برای پشتیبانی اپ‌ها پایگاه‌های داده و میکروسرویس‌های خوش‌ساخت و مقیاس‌پذیر را پیاده می‌کنیم.',
    'in short we are software architects, designers and':'خلاصه ما معمار، طراح و نویسنده‌ی نرم‌افزار هستیم. با تمرکز ویژه بر ساخت اپلیکیشن (افزارک) ها.',
    'app developers':'اپ سازان',
    'thinking globally, acting locally':'فکر جهانی، عملکرد محلی',
    'with global partners in the london, uk, we are a g':'با داشتن پایگاه و مشتری در لندن، ما تیم نرم‌افزاری با استانداردهای جهانی در کیفیت و تحویل محصول هستیم.',
    'on the other hand, we proudly use our local advant':'هم‌زمان ما از مزیت‌های خودمان به عنوان یک تیم ایرانی بهره‌مندیم. فضای استارتاپی جذاب در تهران برنامه‌نویسان با استعداد زیادی تربیت کرده و سبک زندگی به نسبت ارزان‌تر باعث شده قیمت تمام‌شده‌ی ما رقابتی‌تر باشد.',
    'linkedin profile': 'نمایه در لینکدین',
  };

  constructor() {
    setTimeout(() => {
      let lang;
      try {
      let temp = localStorage.getItem('lang');
      lang = temp ? temp : 'english';
      } catch (e) {
        lang = 'english';
      }
      if (lang !== this.lang) {
        this.lang = lang;
        this.langSubject.next(lang);
      }
    }, 0);
  }

  changeLanguage(lang = null) {
    if (!lang) {
      this.lang = (this.lang === 'english') ? 'farsi' : 'english';
    } else {
      this.lang = lang;
    }

    this.langSubject.next(this.lang);
  }

  translate(value: string) {
    if (this.lang === 'english') {
      return value;
    } else if (this._translation[value.substring(0,50).toLowerCase()]) {
      return this._translation[value.substring(0,50).toLowerCase()];
    } else {
      return value;
    }
  }
}
