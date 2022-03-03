import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpMethodsService {

  constructor(private http: HttpClient) { }

  getData(url: string): Observable<any> {
    return this.http.get(url);
  }

  postData(url: string, data: any): Observable<any> {
    return this.http.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
