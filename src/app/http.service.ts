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

  postData(address, data) : Observable<Response>{
    let headers = new Headers();
    return this.http.post(this.serverAddress + '/' + address, data);
  }

  putData(address, data) : Observable<Response> {
    let headers = new Headers();
    return this.http.put(this.serverAddress + '/' + address, data);
  }

  getData(address) : Observable<Response>{
    let headers = new Headers();
    return this.http.get(this.serverAddress + '/' + address);
  }

  deleteData(address) : Observable<Response>{
    let headers = new Headers();
    return this.http.delete(this.serverAddress + '/' + address);
  }
}
