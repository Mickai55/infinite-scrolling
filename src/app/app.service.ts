import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl = 'https://oauth.reddit.com/';
  headers = {};

  constructor(private httpClient: HttpClient) {
    let access_token = "YOUR_ACCESS_TOKEN";
    this.headers = {
      'User-Agent': 'agent',
      'Authorization': `bearer ${access_token}`
    };
  }

  getInfoMe(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'api/v1/me', {headers: this.headers});
  }

  getPage(limit: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + 'r/aww', {headers: this.headers, params: {limit}});
  }
}
