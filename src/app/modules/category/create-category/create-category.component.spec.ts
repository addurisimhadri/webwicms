import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoryComponent } from './create-category.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from 'src/app/services/share/data.service';
import { CreateConCategoryService } from 'src/app/services/category/create-con-category.service';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { DebugElement } from '@angular/core';
import {By} from "@angular/platform-browser";
describe('CreateCategoryComponent', () => {
  let component: CreateCategoryComponent;
  let fixture: ComponentFixture<CreateCategoryComponent>;
  let contentTypeId:DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCategoryComponent ],
      imports:[FormsModule,ReactiveFormsModule ,RouterTestingModule.withRoutes([]),
      HttpClientTestingModule],
      providers:[DataService,
        CreateConCategoryService,
        FormBuilder
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategoryComponent);    
    component = fixture.componentInstance;
    contentTypeId = fixture.debugElement.query(By.css('input[id=contentTypeId]'));
    component.ngOnInit();
    fixture.detectChanges();
  });
 
  it('should create', () => {
    contentTypeId.nativeElement.value = 31;
    expect(component).toBeTruthy();
  });
});
