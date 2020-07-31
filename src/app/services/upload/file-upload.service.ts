import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../models/api-response';

export class FTPUploadObject{
  zipFileName: string ;
	uploadTime:string ;
	fileSize:String;
}

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  web_url : any =sessionStorage.getItem('web_url');
  constructor(private httpClient:HttpClient) { }

  upload(data: FormData) :Observable<ApiResponse>{
    return this.httpClient.post<ApiResponse>(this.web_url+'/wicmsapi/web/upload', data);    
  }
  getZileFileNames(cpId,cType) :Observable<FTPUploadObject[]>{
    return this.httpClient.get<FTPUploadObject[]>(this.web_url+'/wicmsapi/ftp/getZileFileNames/'+cpId+'/'+cType);    
  }

  ftpUpload(data: FormData) :Observable<ApiResponse>{
    return this.httpClient.post<ApiResponse>(this.web_url+'/wicmsapi/ftp/upload', data);    
  }
}
