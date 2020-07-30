import { Component, OnInit } from '@angular/core';
import { CreateConCategoryService,PhysicalFolder} from '../../../services/category/create-con-category.service'
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ContenttypeService } from 'src/app/services/content/contenttype.service';
import { ContentType } from 'src/app/models/content-type.model';
import { DataService } from 'src/app/services/share/data.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  physicalFolder : PhysicalFolder=new PhysicalFolder('','','','');
  formGroup: FormGroup;
  contentTypes:ContentType[];
  contentType:ContentType;
  public data;
  ctType :any;
  constructor(private formBuilder: FormBuilder,private router: Router,
    private createConCategoryService: CreateConCategoryService,
    private ds: DataService,
    private contenttypeService: ContenttypeService
    ) { this.data = ds.getOption();}
  
  ngOnInit(): void {
    this.createForm();
    this.ctType=this.data.ctType;
    alert(this.ctType);
    this.contenttypeService.getContentType(this.ctType).subscribe( data => {
      this.contentTypes = data;
    })
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      contentTypeId: new FormControl('', [Validators.required]),
      'folderName': ['', Validators.required]
    });
  }
  onSubmit(physicalFolder) {
    this.physicalFolder=physicalFolder;
    const folderName=this.formGroup.get('folderName').value;
    const contentTypeId=this.formGroup.get('contentTypeId').value;
    alert(folderName+"=============="+contentTypeId)
    if(folderName.trim()!="" && contentTypeId !=""){
      this.createConCategoryService.createFolder(this.physicalFolder).
      subscribe(res=>{
        //alert(res.message);
        this.router.navigate(['db/viewConCat'])
      },
      error=>{
        alert(error.status+"=========="+error.message);
      });
    }else{
      alert("Please Enter/Select Values");
    }
  }

}
