import { Component, OnInit } from '@angular/core';
import { CreateConCategoryService,PhysicalFolder} from '../../../services/category/create-con-category.service'
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  physicalFolder : PhysicalFolder=new PhysicalFolder('','','');
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router,
    private createConCategoryService: CreateConCategoryService) { }
  
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      'folderName': ['', Validators.required]
    });
  }
  onSubmit(physicalFolder) {
    this.physicalFolder=physicalFolder;
    const folderName=this.formGroup.get('folderName').value;
    alert(folderName)
    if(folderName.trim()!=""){
      this.createConCategoryService.createFolder(this.physicalFolder).
      subscribe(res=>{
        //alert(res.message);
        this.router.navigate(['db/viewConCat'])
      },
      error=>{
        alert(error.status+"=========="+error.message);
      });
    }else{
      alert("Please Enter Category Name");
    }
  }

}
