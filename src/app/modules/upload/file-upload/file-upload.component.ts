import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/upload/file-upload.service';
import { DataService } from '../../../services/share/data.service';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  public data; 
  cType : any;
  constructor(private fileUploadService: FileUploadService,private ds: DataService) {
    this.data = ds.getOption();
    alert(this.data);
   }
  
  ngOnInit(): void {
  }
  uploadType(){
   this.cType=this.data.cType;
   alert(this.cType);
 }

}
