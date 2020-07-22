import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/upload/file-upload.service';
import { DataService } from '../../../services/share/data.service';
import {ContenttypeService} from '../../../services/ct/contenttype.service'
import {ContentType} from '../../../models/content-type.model';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  public data; 
  cType : any;
  contentTypes:ContentType[];
  contentType:ContentType;
  constructor(private fileUploadService: FileUploadService,private ds: DataService, private contenttypeService: ContenttypeService) {
    this.data = ds.getOption();
    //alert(this.data);
   }
  
  ngOnInit(): void {
    this.contenttypeService.getContentType().subscribe( data => { 
      this.contentTypes = data;
    })
  }
  uploadType(){
   this.cType=this.data.cType;
   alert(this.cType);
 }

}
