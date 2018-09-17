import {Injectable} from '@angular/core';
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
          reject(err);
        }
      );
    });
  }

  getPeopleData() {
    return new Promise((resolve, reject) => {
      this.httpService.get('people').subscribe(data => resolve(data), err => reject(err))
    });
  }


}
