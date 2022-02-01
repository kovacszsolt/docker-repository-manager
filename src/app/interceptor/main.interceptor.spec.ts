import {inject, TestBed, waitForAsync} from '@angular/core/testing';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {AppMainInterceptor} from './main.interceptor';


const routerSpy = {navigateByUrl: jasmine.createSpy('navigateByUrl')};
describe('AppMainInterceptor', () => {
  beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule,
        ],
        providers: [

          {
            provide: HTTP_INTERCEPTORS,
            useClass: AppMainInterceptor,
            multi: true,
          },
          {provide: Router, useValue: routerSpy},
        ],
      }).compileComponents();
    }),
  );
  beforeEach(() => {

  });


  it('call ok', inject([HttpClient, HttpTestingController],
    (http: HttpClient, mock: HttpTestingController) => {
      http.get('/api').subscribe((response) => {
        expect(response).toEqual({data: 'test'});
      });
      const request = mock.expectOne({method: 'GET'});
      request.flush({data: 'test'});
      mock.verify();
    }));

});
