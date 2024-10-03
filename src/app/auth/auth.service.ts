import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {AppState} from "./reducers";
import {environment} from "../../environments/environment.development";
import {user} from "./+state/auth.selectors";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.baseUrl}`
  user$ = this.store.select(user)

  constructor(
    private store: Store<AppState>,
    private http: HttpClient,
  ) {}

  getAuthenticationToken() {
    const user = JSON.parse(localStorage.getItem('user') as string)

    return user ? user.access_token : null
  }

  login(user: any) {
    return this.http.post(`${this.apiUrl}/login`, user)
  }

  logout() {
    return this.http.get(`${this.apiUrl}/logout`)
  }


}
