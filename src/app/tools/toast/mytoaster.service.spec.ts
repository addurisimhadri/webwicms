import { TestBed, inject,fakeAsync,tick  } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { MytoasterService } from './mytoaster.service';
import { ToastrModule } from 'ngx-toastr';

describe('MytoasterService', () => {
  let service: MytoasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,ToastrModule.forRoot(
        )],
      providers: [MytoasterService]
    });
    service = TestBed.inject(MytoasterService);
  });

  it('should be created',inject([MytoasterService], (service: MytoasterService) => {
    expect(service).toBeTruthy();
  }));
});
