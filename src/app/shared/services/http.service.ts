import {Inject, Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs';
import {APP_BASE_HREF} from '@angular/common';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {
  serverAddress: string = 'api';

  constructor(private http: HttpClient, @Optional() @Inject(APP_BASE_HREF) origin: string) {
    // this.serverAddress = `${origin}${this.serverAddress}`;
  }

  post(address, data): Observable<any> {
    return this.http.post(this.serverAddress + '/' + address, data, {observe: 'response'}).map(el => el.body);
  }

  put(address, data): Observable<any> {
    return this.http.put(this.serverAddress + '/' + address, data, {observe: 'response'}).map(el => el.body);
  }

  get(address): Observable<any> {
    return this.http.get(this.serverAddress + '/' + address, {observe: 'response'}).map(el => el.body);
  }

  delete(address): Observable<any> {
    return this.http.delete(this.serverAddress + '/' + address, {observe: 'response'}).map(el => el.body);
  }

}
