import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Content } from 'src/app/models/content';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  web_url : any =sessionStorage.getItem('web_url');
  constructor(private httpClient:HttpClient) { }

  getContentByCT() :Observable<Content[]>{
    return this.httpClient.get<Content[]>(this.web_url+"/wicmsapi/cont/31/getAll");
  }
}
