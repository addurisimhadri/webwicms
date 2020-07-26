import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FileUploadService } from 'src/app/services/upload/file-upload.service';
import { DataService } from '../../../services/share/data.service';
import {ContenttypeService} from '../../../services/content/contenttype.service'
import {ContentType} from '../../../models/content-type.model';
import {ContentproviderService} from '../../../services/content/contentprovider.service';
import {ContentProvider} from '../../../models/content-provider';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit , OnDestroy{
  public form: FormGroup;
  public data; 
  cType : any;
  contentTypes:ContentType[];
  contentType:ContentType;
  contentProviders:ContentProvider[];
  contentProvider:ContentProvider;
  @Input() allowMultipleFiles = false;
  @Input() acceptedTypes = '*.*';
  selectedFile: File;
  selectedFileText = '';
  mySubscription: any;
  constructor(private fileUploadService: FileUploadService,
    private ds: DataService, 
    private contenttypeService: ContenttypeService,
    private contentproviderService:ContentproviderService,
    private router:Router) {
    this.data = ds.getOption();
   
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;    
    };    
    this.mySubscription = this.router.events.subscribe((event) => {    
      if (event instanceof NavigationEnd) {    
        // Trick the Router into believing it's last link wasn't previously loaded    
        this.router.navigated = false;    
      }    
    });
   }
   ngOnDestroy() {
    if (this.mySubscription) {  
      this.mySubscription.unsubscribe();  
    }  
  }
  
  ngOnInit(): void {
    this.cType=this.data.cType;  
    this.contenttypeService.getContentType(this.cType).subscribe( data => {
      //alert(data);
      this.contentTypes = data;
    })
    this.contentproviderService.getContentProviders().subscribe( data => { 
      this.contentProviders = data;
    })

    this.form = new FormGroup({
      contentId: new FormControl('', [Validators.required]),
      cpId: new FormControl('', [Validators.required]),
      zipFile :new FormControl( null, null)
    });
  }
  uploadType(){
   this.cType=this.data.cType;
   //alert(this.cType);
 }

 onSubmit(){  
  const uploadData = new FormData();
  uploadData.append('zipFile', this.selectedFile, this.selectedFile.name);
  uploadData.append('contentId',this.form.controls.contentId.value);
  uploadData.append('cpId',this.form.controls.cpId.value);
  this.fileUploadService.upload(uploadData).subscribe(
    res=>{
      alert(res.message);
      this.router.navigate(['db/approveContent']);
    }, error => { 
      alert(error.status+"=========="+error.message+"=========="+error.data);
    }
  );

 }
  onFileChanged(event) {
  this.selectedFile = event.target.files[0];
  alert(this.selectedFile.name);
}


}
