import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';
import {Content} from '../../models/content'

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  web_url : any =sessionStorage.getItem('web_url');
  constructor(private httpClient:HttpClient) { }

  getApprovableContentByCT(cType) :Observable<Content[]>{
    return this.httpClient.get<Content[]>(this.web_url+"/wicmsapi/cont/approvable/"+cType+"/getAll");
  }
  getApprovedContentByCT(cType) :Observable<Content[]>{
    return this.httpClient.get<Content[]>(this.web_url+"/wicmsapi/cont/approved/"+cType+"/getAll");
  }
  updateStatus(requestData)  :Observable<ApiResponse>{
    let Data={"contents":requestData}
    console.log("Data "+JSON.stringify(Data));
    const httpOptions = {
      headers: new HttpHeaders({     
        'Content-Type':  'application/json',        
      })
    };
    return this.httpClient.post<ApiResponse>(this.web_url+"/wicmsapi/cont/updatestatus",JSON.stringify(Data),httpOptions);  

  }
}
