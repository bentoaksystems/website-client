import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HttpService {
  serverAddress: string = 'api';

  constructor(private http: Http) { }

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
