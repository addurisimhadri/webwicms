import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from 'src/app/services/share/data.service';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes([])],
        providers:[DataService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',inject([HeaderComponent], (component: HeaderComponent) => {
    expect(component).toBeTruthy();
  }));
});
