import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  web_url : any="http://localhost:2020";
  constructor(private httpClient:HttpClient) { }

  authenticate(loginPayload) { 
    //alert(loginPayload.username+""+loginPayload.password);
let username=loginPayload.username;
let password=loginPayload.password;
return this.httpClient
  .post<any>(this.web_url+"/wicmsapi/authenticate", { username, password})
  .pipe(
    map(userData => {   
      sessionStorage.setItem("web_url", this.web_url);
      sessionStorage.setItem("username", userData.userName);
      let tokenStr = "Bearer " + userData.token;
      sessionStorage.setItem("token", tokenStr);
      sessionStorage.setItem("userId", userData.userId);
      console.log("userId::"+userData.userId+" | tokenStr::  "+tokenStr); 
      return userData;
    }
    , error => {
      alert(error.message+"================="+error.status);
    }
    )
    ); 
}
isUserLoggedIn() {
  let user = sessionStorage.getItem('username')
  console.log(!(user === null))
  return !(user === null)
}
logOut() {
  sessionStorage.removeItem('username')
  sessionStorage.removeItem('userId')
  sessionStorage.removeItem('token')
}

}
