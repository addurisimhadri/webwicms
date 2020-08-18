import {SelectionModel} from '@angular/cdk/collections';
import {Component,ViewChild,OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {ContentService} from '../../../services/content/content.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/share/data.service';
import {Content} from '../../../models/content';
import { Router, NavigationEnd } from '@angular/router';

export interface UserData {
  id: string;
  name: string;
  progress: string;
}

@Component({
  selector: 'app-delete-content',
  templateUrl: './delete-content.component.html',
  styleUrls: ['./delete-content.component.css']
})
export class DeleteContentComponent implements OnInit {
  displayedColumns: string[] = ['select','contId', 'sampleName','status','ctTypeId', 'name','title'];
  public dataSource = new MatTableDataSource<Content>();
  filterValues: any = {};
  blueColor: boolean;
  firstName: boolean;
  contents :Content[];
  users :any;
  public data; 
  cType : any;
  myform: FormGroup;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  selection = new SelectionModel<Content>(true, []);


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
mySubscription: any;
  constructor(private ds: DataService,private contentService: ContentService, private router:Router) {
    this.data = ds.getOption();
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;    
}; this.mySubscription = this.router.events.subscribe((event) => {    
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
    this.getApprovableContentByCT();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.myform = new FormGroup({
    });
  }
  getApprovableContentByCT(){
    this.cType=this.data.cType;
    //alert(this.cType);
    this.contentService.getApprovableContentByCT(this.cType).subscribe(
      res=>{
        this.dataSource.data = res as Content[];
      },
      error=>{
          alert(error.status+"======================="+error.message);
          this.router.navigate(['db'])
      }
    );
  }
  
  onSubmit(){
    this.contents=this.selection.selected;
   this.contentService.delete(this.contents).subscribe(res=>{
      alert(res.message);
      this.getApprovableContentByCT();
      this.selection.clear();
   });
  }
}
