import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ContentType} from '../../models/content-type.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContenttypeService {
  web_url : any =sessionStorage.getItem('web_url');

  constructor(private httpClient:HttpClient) { }

  getContentTypes() :Observable<ContentType[]>{
    return this.httpClient.get<ContentType[]>(this.web_url+"/wicmsapi/ct/getAll");
  }
  getContentType(cType) :Observable<ContentType[]>{
    return this.httpClient.get<ContentType[]>(this.web_url+"/wicmsapi/ct/get/"+cType);
  }
}
