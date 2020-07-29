import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PhysicalFolder, CreateConCategoryService } from 'src/app/services/category/create-con-category.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

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

  constructor(private router:Router,private createConCategoryService: CreateConCategoryService) { }

  ngOnInit(): void {
    this.getConCategories(); 
    this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }
  getConCategories() {
    this.createConCategoryService.getFolders().
    subscribe(res=>{
      this.dataSource.data = res as PhysicalFolder[];
    },error=>{
      alert(error.status+"=========="+error.message);
    });
  }
  addConCat(){
    this.router.navigate(['db/createConCat'])
  }
}
