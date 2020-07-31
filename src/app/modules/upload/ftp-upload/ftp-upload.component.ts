import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContentType } from 'src/app/models/content-type.model';
import { ContentProvider } from 'src/app/models/content-provider';
import { PhysicalFolder, CreateConCategoryService } from 'src/app/services/category/create-con-category.service';
import { FileUploadService, FTPUploadObject } from 'src/app/services/upload/file-upload.service';
import { DataService } from 'src/app/services/share/data.service';
import { ContenttypeService } from 'src/app/services/content/contenttype.service';
import { ContentproviderService } from 'src/app/services/content/contentprovider.service';
import { Router, NavigationEnd } from '@angular/router';
import { MytoasterService } from 'src/app/tools/toast/mytoaster.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-ftp-upload',
  templateUrl: './ftp-upload.component.html',
  styleUrls: ['./ftp-upload.component.css']
})
export class FtpUploadComponent implements OnInit {

  public form: FormGroup;
  public data; 
  cType : any;
  contentTypes:ContentType[];
  contentType:ContentType;
  contentProviders:ContentProvider[];
  contentProvider:ContentProvider;
  physicalFolder : PhysicalFolder=new PhysicalFolder('','','','');
  physicalFolders : PhysicalFolder[];
  fTPUploadObject:FTPUploadObject;
  fTPUploadObjects : FTPUploadObject[];
  selectedFile: File;
  selectedFileText = '';
  mySubscription: any;
  displayedColumns: string[] = ['select','zipFileName', 'uploadTime','fileSize'];
  public dataSource = new MatTableDataSource<FTPUploadObject>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  selection = new SelectionModel<FTPUploadObject>(true, []);

 /** Whether the number of selected element s matches the total number of rows. */
 isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
}


  constructor(private fileUploadService: FileUploadService,
    private ds: DataService, 
    private contenttypeService: ContenttypeService,
    private contentproviderService:ContentproviderService,
    private router:Router,
    private createConCategoryService: CreateConCategoryService,
    private toastr: MytoasterService) {

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
    if(typeof this.cType !== 'undefined'){
      this.contenttypeService.getContentType(this.cType).subscribe( data => {
        //alert(data);
        this.contentTypes = data;
      })
      this.contentproviderService.getContentProviders().subscribe( data => { 
        this.contentProviders = data;
      })
      this.createConCategoryService.getCtTypeFolders(this.cType).
      subscribe(res=>{
        this.physicalFolders=res;
      },error=>{
        alert(error.status+"=========="+error.message);
      })
    }else{
      this.router.navigate(['db'])
    }
    this.form = new FormGroup({
      contentId: new FormControl('', [Validators.required]),
      cpId: new FormControl('', [Validators.required]),
      pfId: new FormControl('', [Validators.required])
    });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onChangeContentProvider(ob) {
    let cpId = ob.value; 
    let ctId=this.form.controls.contentId.value;
    if(ctId !== null && ctId !== ''){
      alert(cpId+"==============="+ctId);
      this.fileUploadService.getZileFileNames(cpId,ctId).
      subscribe(res=>{
          this.fTPUploadObjects=res;
      },error=>{
        alert(error.status+"=========="+error.message);
      }
      )
    }else{
     
      this.form.reset();
      this.toastr.showToast('','Please Select Content Type','error');
    }
  }
  onSubmit(){ 


  }

}
