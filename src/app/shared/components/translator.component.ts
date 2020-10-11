import {Component} from '@angular/core';
import {DictionaryService} from '../services/dictionary.service';
import {MatPaginatorIntl} from '@angular/material';
// import * as moment from 'moment';
// import * as jMoment from 'jalali-moment';
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
//   getFormattedDate(date) {
//     if (this.dictionaryService.getLocaleSymbol() === 'fa') {
//       return persianJS(jMoment(date).format('jYYYY-jMM-jDD')).englishNumber().toString();
//     }

//     return moment(date).format('YYYY-MM-DD');
//   }
//   toLocaleDate(date, format = 'YYYY-MM-DD') {
//     if (this.dictionaryService.getLocaleSymbol() === 'fa') {
//       return jMoment(date).format(format === 'YYYY-MM-DD' ? 'jYYYY-jMM-jDD' : format);
//     } else {
//       return moment(date).format(format);
//     }
//   }
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
//   calcAge(birth_date: Date) {
//     const years = moment.duration(moment().diff(birth_date)).asYears();
//     const months = Math.round((years - Math.floor(years)) * 12);
//     return years ?
//     [this.trl(Math.floor(years)), this.trl('Year')].concat(months ? [this.trl(months), this.trl('Month')] : []).join(' ') : '';
//   }
//   padNumberWithLeadingZeros(num, totalDigits = 2) {
//     return (this.trl(num) + '').padStart(totalDigits, this.trl(0));
//   }
}
