import { TestBed, inject,fakeAsync,tick  } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthenticationService]
    });
   
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it(
    'should perform login correctly',
    fakeAsync(
      inject(
        [AuthenticationService, HttpTestingController],
        (authService: AuthenticationService, backend: HttpTestingController) => {

          // Set up
          const url = 'http://localhost:2020/wicmsapi/authenticate';
          const responseObject = {
            userName: 'Appanna',
            token: ''
          };
          const loginPayload = {username: 'Appanna', password: 'Appanna123'};
         
          let response = null;
          // End Setup

          authService.authenticate(loginPayload).subscribe(
            (receivedResponse: any) => {
              response = receivedResponse.userName;
            },
            (error: any) => {
              alert(error);
            }
          );

          const requestWrapper = backend.expectOne({url: 'http://localhost:2020/wicmsapi/authenticate'});
          requestWrapper.flush(responseObject);

          tick();

          expect(requestWrapper.request.method).toEqual('POST');
          //expect(response).toEqual(responseObject.userName);
          //expect(response.status).toBe(200);
        }
      )
    )
  );



});
