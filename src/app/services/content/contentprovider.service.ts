import { Injectable } from '@angular/core';
import {ContentProvider} from '../../models/content-provider';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContentproviderService {
  web_url : any =sessionStorage.getItem('web_url');
  constructor(private httpClient:HttpClient) { }

  getContentProviders() :Observable<ContentProvider[]>{

    return this.httpClient.get<ContentProvider[]>(this.web_url+"/wicmsapi/cp/getAll");
  }
}
