import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, retryWhen, switchMap, throwError} from 'rxjs';
import {Router} from '@angular/router';


@Injectable()
export class AppMainInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      (response) => {
        return response;
      },
      retryWhen((errors) => {
        return errors.pipe(
          switchMap((error) => {
            if (error.status === 0 && error.statusText === 'Unknown Error') {
           //   this.router.navigateByUrl('/error/no_repository');
              return throwError(error);
            } else {
              return throwError(error);
            }
          }),
        );
      }),
    );
  }
}

