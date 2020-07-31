import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {ContentType} from '../../../models/content-type.model'
import { DataService } from '../../../services/share/data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggelSideBarForMe: EventEmitter<any> =new EventEmitter();
  contentTypes:ContentType[];
  contentType:ContentType;

  constructor(private router: Router,private ds: DataService) { }

  ngOnInit(): void {

  }
  toggelSideBar(){
    this.toggelSideBarForMe.emit();
  }
  upload(cType : any){
    //alert(cType);
    this.ds.setOption('cType', cType);  
    this.router.navigate(['db/fileUpload'])
  }
  uploadftp(cType : any){
    //alert(cType);
    this.ds.setOption('cType', cType);  
    this.router.navigate(['db/ftpUpload'])
  }
  
  approve(cType : any){
    this.ds.setOption('cType', cType);  
    this.router.navigate(['db/approveContent'])
  }
  view(cType : any){
    this.ds.setOption('cType', cType);  
    this.router.navigate(['db/viewContent'])
  }
  viewConCat(){
    this.router.navigate(['db/viewConCat'])
  }
}
