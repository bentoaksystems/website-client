import { Injectable } from '@angular/core';
import {HttpService} from './http.service';

@Injectable()
export class GetJsonFileService {
  headerData: any = {};
  technologyData: any = {};
  footerData: any = {};

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
  getTechnologyData() {
    return new Promise((resolve, reject) => {
      this.httpService.get('technology').subscribe(
        (data) => {
          this.technologyData = data;
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
          this.footerData = data;
          resolve(data)
        },
        (err) => {
          console.error('error');
        }
      );
    });
  }

}
