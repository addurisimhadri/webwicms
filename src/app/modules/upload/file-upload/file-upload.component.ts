import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/upload/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  cType : any;
  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }
  uploadType(cType :any){
   this.cType=cType;
 }

}
