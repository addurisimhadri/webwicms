import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ViewCategoryComponent } from './view-category.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from 'src/app/services/share/data.service';
import { CreateConCategoryService } from 'src/app/services/category/create-con-category.service';
import { ContenttypeService } from 'src/app/services/content/contenttype.service';
import { ToastrModule } from 'ngx-toastr';
import { MytoasterService } from 'src/app/tools/toast/mytoaster.service';
describe('ViewCategoryComponent', () => {
  let component: ViewCategoryComponent;
  let fixture: ComponentFixture<ViewCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCategoryComponent ]
      ,imports:[RouterTestingModule.withRoutes([]),
              HttpClientTestingModule,
              ToastrModule.forRoot(
                )],
      providers:[DataService,
        CreateConCategoryService,ContenttypeService,MytoasterService
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
