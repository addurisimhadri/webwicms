import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteContentComponent } from './delete-content.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from 'src/app/services/share/data.service';
import { ContentService } from 'src/app/services/content/content.service';

describe('DeleteContentComponent', () => {
  let component: DeleteContentComponent;
  let fixture: ComponentFixture<DeleteContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteContentComponent ],
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
    fixture = TestBed.createComponent(DeleteContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
