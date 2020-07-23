import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  web_url : any =sessionStorage.getItem('web_url');
  constructor(private httpClient:HttpClient) { }

  upload(data: FormData) :Observable<any>{
    return this.httpClient.post<any>(this.web_url+'/wicmsapi/web/upload', data)
    
  }
}
