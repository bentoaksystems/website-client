import { Injectable } from '@angular/core';
import {HttpService} from './http.service';

@Injectable()
export class GetJsonFileService {
  headerData: any = {};

  constructor(private httpService: HttpService) {
  }

  getHeaderData() {
    return new Promise((resolve, reject) => {
      this.httpService.get('header').subscribe(
        (data) => {
          this.headerData = data;
          resolve(data)
        },
        (err) => {
          console.error('error');
        }
      );
    });
  }


}
