import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from 'src/app/models/api-response';
import { Observable } from 'rxjs';

export class PhysicalFolder{
  constructor(
    public id?: string,
    public folderName?: string,
    public location?: string
  ) {}

}

@Injectable({
  providedIn: 'root'
})
export class CreateConCategoryService {
  web_url : any =sessionStorage.getItem('web_url');
  constructor(private httpClient:HttpClient) { }


  createFolder(physicalFolder) :Observable<ApiResponse>{
    //const params = request;
    //alert(physicalFolder.folderName);
    return this.httpClient.post<ApiResponse>(this.web_url+"/wicmsapi/pf/add", physicalFolder);
  }
  getFolders() :Observable<PhysicalFolder[]>{
    return this.httpClient.get<PhysicalFolder[]>(this.web_url+"/wicmsapi/pf/getAll");
  }
}
