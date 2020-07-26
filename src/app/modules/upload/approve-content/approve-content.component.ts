import {SelectionModel} from '@angular/cdk/collections';
import {Component,ViewChild,OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {ContentService} from '../../../services/content/content.service';
import { FormGroup, FormControl } from '@angular/forms';
export interface UserData {
  id: string;
  name: string;
  progress: string;
}
export interface Content{
  contId :number;
	ctTypeId : number;
	name : string;
	title : string;
	sampleName : any;

}


@Component({
  selector: 'app-approve-content',
  templateUrl: './approve-content.component.html',
  styleUrls: ['./approve-content.component.css']
})
export class ApproveContentComponent implements OnInit {
  displayedColumns: string[] = ['select','contId', 'sampleName','status','ctTypeId', 'name','title'];
  public dataSource = new MatTableDataSource<Content>();
  //dataSource: MatTableDataSource<Cont>;
  filterValues: any = {};
  blueColor: boolean;
  firstName: boolean;
  contents :Content[];
  users :any;

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

  constructor(private contentService: ContentService) {  }

  
  ngOnInit() {
    this.getContentByCT();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.myform = new FormGroup({
    });
  }
  getContentByCT(){
    this.contentService.getContentByCT().subscribe(
      res=>{
        this.dataSource.data = res as Content[];
      },
      error=>{
          alert(error.status+"======================="+error.message);
      }
    );

  } 
  
  onSubmit(){
    this.contents=this.selection.selected;
   this.contentService.updateStatus(this.contents).subscribe(res=>{
      alert(res.message);
      this.getContentByCT();
   });
  }
}