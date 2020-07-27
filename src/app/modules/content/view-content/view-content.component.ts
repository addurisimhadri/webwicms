import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Content} from '../../../models/content'
import { DataService } from 'src/app/services/share/data.service';
import { ContentService } from 'src/app/services/content/content.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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
  constructor(private ds: DataService,private contentService: ContentService) {
    this.data = ds.getOption();
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
        }
      );
    }
}
