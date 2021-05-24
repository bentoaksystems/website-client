import {Inject, Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs';
import {APP_BASE_HREF} from '@angular/common';
import 'rxjs/add/operator/map';
import {HttpClient, HttpParams } from '@angular/common/http';
import { CookiesService } from './cookies.service';

@Injectable()
export class HttpService {
  serverAddress = 'api';

  constructor(private http: HttpClient, @Optional() @Inject(APP_BASE_HREF) origin: string, private cookiesService: CookiesService) {
    // this.serverAddress = `${origin}${this.serverAddress}`;
  }
  post(address, data): Observable<any> {
    const headers = { language: this.getLanguage()};
    return this.http.post(this.serverAddress + '/' + address, data, {observe: 'response', headers: headers}).map(el => el.body);
  }

  put(address, data): Observable<any> {
    return this.http.put(this.serverAddress + '/' + address, data, {observe: 'response'}).map(el => el.body);
  }

  get(address): Observable<any> {
    const headers = { language: this.getLanguage()};
    let langPrefix = 'en';
    if (headers.language === 'German') langPrefix = 'de';
    return this.http.get(this.serverAddress + '/' + langPrefix + '/' + address, {observe: 'response', headers: headers}).map(el => el.body);
  }

  delete(address): Observable<any> {
    return this.http.delete(this.serverAddress + '/' + address, {observe: 'response'}).map(el => el.body);
  }

  getLanguage() {
    return this.cookiesService.getCookie('language') || 'English';
  }

}
