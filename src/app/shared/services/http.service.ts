import {Inject, Injectable, Optional} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {APP_BASE_HREF} from "@angular/common";

@Injectable()
export class HttpService {
  serverAddress: string = 'api';

  constructor(private http: Http, @Optional() @Inject(APP_BASE_HREF) origin: string) {
    this.serverAddress = `${origin}${this.serverAddress}`;
  }

  post(address, data): Observable<Response> {
    return this.http.post(this.serverAddress + '/' + address, data);
  }

  put(address, data): Observable<Response> {
    return this.http.put(this.serverAddress + '/' + address, data);
  }

  get(address): Observable<Response> {
    return this.http.get(this.serverAddress + '/' + address);
  }

  delete(address): Observable<Response> {
    return this.http.delete(this.serverAddress + '/' + address);
  }
}
