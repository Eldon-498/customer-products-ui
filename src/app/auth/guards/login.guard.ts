import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {Store} from "@ngrx/store";
import { AppState } from "../reducers"
import {tap} from "rxjs";
import {isLoggedIn} from "../+state/auth.selectors";

export const loginGuard: CanActivateFn = (route, state) => {

  const store: Store<AppState> = inject(Store);
  const router = inject(Router);

  return store.select(isLoggedIn).pipe(
    tap(loggedIn => {
      if (!loggedIn) {
        router.navigateByUrl('/login');
      }
    })
  );
};
