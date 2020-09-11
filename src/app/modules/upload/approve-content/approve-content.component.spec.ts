import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ApproveContentComponent } from './approve-content.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from 'src/app/services/share/data.service';
import { ContentService } from 'src/app/services/content/content.service';

describe('ApproveContentComponent', () => {
  let component: ApproveContentComponent;
  let fixture: ComponentFixture<ApproveContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveContentComponent ],
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes([])],
        providers:[DataService,
          ContentService
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
