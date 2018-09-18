import { Injectable } from '@angular/core';
import {HttpService} from './http.service';

@Injectable()
export class GetJsonFileService {

  constructor(private httpService: HttpService) {
  }

  getHeaderData() {
    return new Promise((resolve, reject) => {
      this.httpService.get('header').subscribe(
        (data) => {
          resolve(data)
        },
        (err) => {
          console.error('error');
        }
      );
    });
  }
  getTechnologyData() {
    return new Promise((resolve, reject) => {
      this.httpService.get('technology').subscribe(
        (data) => {
          resolve(data)
        },
        (err) => {
          console.error('error');
        }
      );
    });
  }

  getFooterData() {
    return new Promise((resolve, reject) => {
      this.httpService.get('footer').subscribe(
        (data) => {
          resolve(data)
        },
        (err) => {
          console.error('error');
        }
      );
    });
  }
}
