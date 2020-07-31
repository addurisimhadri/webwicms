import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PhysicalFolder, CreateConCategoryService } from 'src/app/services/category/create-con-category.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ContentType } from 'src/app/models/content-type.model';
import { ContenttypeService } from 'src/app/services/content/contenttype.service';
import { DataService } from 'src/app/services/share/data.service';
import {MytoasterService} from '../../../tools/toast/mytoaster.service'



@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'folderName'];
  public dataSource = new MatTableDataSource<PhysicalFolder>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  contentTypes:ContentType[];
  contentType:ContentType;
  ctType :any;

  constructor(private router:Router,private createConCategoryService: CreateConCategoryService,
    private contenttypeService: ContenttypeService,private ds: DataService,
    private toastr: MytoasterService
    ) { }
    

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.contenttypeService.getContentTypes().subscribe( data => {
      this.contentTypes = data;
    });


  }
  onChangeContentType(ob) {
    let cType = ob.value;   
    this.getConCategories(cType);
  }

  getConCategories(cType) {
    this.ctType=cType;
    this.createConCategoryService.getCtTypeFolders(cType).
    subscribe(res=>{
      this.dataSource.data = res as PhysicalFolder[];
    },error=>{
      alert(error.status+"=========="+error.message);
    });
  }
  addConCat(ctType){
    if(typeof ctType !== 'undefined'){
      this.ds.setOption('ctType', ctType); 
      this.router.navigate(['db/createConCat'])
    }else{
      this.toastr.showToast('', 'Please select Content Type', 'error');
    }
  }
}
