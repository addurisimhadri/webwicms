import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContentComponent } from './view-content.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from 'src/app/services/share/data.service';
import { ContentService } from 'src/app/services/content/content.service';

describe('ViewContentComponent', () => {
  let component: ViewContentComponent;
  let fixture: ComponentFixture<ViewContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
                    ViewContentComponent 
                  ] ,
      imports:[
              RouterTestingModule.withRoutes([]),
              HttpClientTestingModule
            ],
      providers:[
                DataService,
                ContentService
              ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
