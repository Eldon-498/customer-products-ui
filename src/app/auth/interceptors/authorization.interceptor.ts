import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from "rxjs";
import {inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {logout} from "../+state/auth.actions";
import {AuthService} from "../auth.service";

export const authorizationInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);
  const store = inject(Store);


  const authenticationToken = authService.getAuthenticationToken();

  if (authenticationToken) {
    req = req.clone({
      setHeaders: {
        Accept: 'application/json',
        Authorization: `Bearer ${authenticationToken}`,
      },
    });
  }

  return next(req).pipe(
    catchError((err) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 403) {
          store.dispatch(logout());
        }
      }
      return throwError(() => err);
    })
  );

};
