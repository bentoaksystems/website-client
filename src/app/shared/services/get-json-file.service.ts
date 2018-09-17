import {Injectable} from '@angular/core';
import {HttpService} from './http.service';

@Injectable()
export class GetJsonFileService {
  headerData: any = {};
  peopleData: any = [];


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
          reject(err);
        }
      );
    });
  }

  getPeopleData() {
    return new Promise((resolve, reject) => {
      this.httpService.get('people').subscribe(
        data => {
          this.peopleData = data;
          resolve(data);
        },
        err => {
          reject(err);
        }
      )
    });
  }


}
