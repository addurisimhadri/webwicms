import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = {};
  constructor() { }
  setOption(option, value) { 
    //alert(""+option+"=========="+value);     
    this.data[option] = value;  
  }  
  
  getOption() { 
    return this.data;  
  }  
}
