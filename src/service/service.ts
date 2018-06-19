import { Injectable, Inject } from '@angular/core';
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: Http, @Inject('baseURL') private baseURL: string) {}

  fetchdata(): Observable<any>{
    return this.http.get(this.baseURL+'users').map(
      (response)=>response.json()

    ).catch((err: Response | any) => {
      return Observable.throw(err.statusText);
    })
  }



  
}
