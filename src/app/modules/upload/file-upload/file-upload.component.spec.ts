import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadComponent } from './file-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { DataService } from 'src/app/services/share/data.service';
import { FileUploadService } from 'src/app/services/upload/file-upload.service';
import { ContenttypeService } from 'src/app/services/content/contenttype.service';
import { ContentproviderService } from 'src/app/services/content/contentprovider.service';
import { CreateConCategoryService } from 'src/app/services/category/create-con-category.service';
import { MytoasterService } from 'src/app/tools/toast/mytoaster.service';

describe('FileUploadComponent', () => {
  let component: FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadComponent ],
      imports:[FormsModule,ReactiveFormsModule ,RouterTestingModule.withRoutes([]),
      HttpClientTestingModule,ToastrModule.forRoot(
        )
    ],
    providers:[DataService,
      FileUploadService,
      ContenttypeService,
      ContentproviderService,
      CreateConCategoryService,
      MytoasterService
]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
