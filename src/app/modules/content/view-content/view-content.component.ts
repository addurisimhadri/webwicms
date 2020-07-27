import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Content} from '../../../models/content'
import { DataService } from 'src/app/services/share/data.service';
import { ContentService } from 'src/app/services/content/content.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.css']
})
export class ViewContentComponent implements OnInit {
  displayedColumns: string[] = ['contId', 'sampleName','status','ctTypeId', 'name','title'];
  public dataSource = new MatTableDataSource<Content>();
  public data; 
  cType : any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  mySubscription: any;
  constructor(private ds: DataService,private contentService: ContentService,
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
    ngOnInit() { 
      this.getApprovedContentByCT();     
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    getApprovedContentByCT(){
      this.cType=this.data.cType;
      alert(this.cType);
      this.contentService.getApprovedContentByCT(this.cType).subscribe(
        res=>{
          this.dataSource.data = res as Content[];
        },
        error=>{
            alert(error.status+"======================="+error.message);
            this.router.navigate(['db'])
        }
      );
    }
}
