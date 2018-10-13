import {Injectable} from '@angular/core';
import {HttpService} from './http.service';

@Injectable()
export class GetJsonFileService {

  constructor(private httpService: HttpService) {
  }

  getHeaderData() {
    return new Promise((resolve, reject) => {
      this.httpService.get('page_info/header').subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  getHomeTopSectionData() {
    return new Promise((resolve, reject) => {
      this.httpService.get('page_info/home/top_section').subscribe(
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
      this.httpService.get('page_info/people').subscribe(data => resolve(data), err => reject(err))
    });
  }

  getFooterData() {
    return new Promise((resolve, reject) => {
      this.httpService.get('page_info/footer').subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  getTechnologyData() {
    return new Promise((resolve, reject) => {
      this.httpService.get('page_info/technology').subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  getAboutUsData() {
    return new Promise((resolve, reject) => {
      this.httpService.get('page_info/about_us').subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  getProjectData() {
    return new Promise((resolve, reject) => {
      this.httpService.get('page_info/project').subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  getProcessData() {
    return new Promise((resolve, reject) => {
      this.httpService.get('page_info/process').subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  getPricingData() {
    return new Promise((resolve, reject) => {
      this.httpService.get('page_info/pricing').subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
