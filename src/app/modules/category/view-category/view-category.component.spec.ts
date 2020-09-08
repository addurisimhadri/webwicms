import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCategoryComponent } from './view-category.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('ViewCategoryComponent', () => {
  let component: ViewCategoryComponent;
  let fixture: ComponentFixture<ViewCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCategoryComponent ]
      ,imports:[RouterTestingModule]
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
