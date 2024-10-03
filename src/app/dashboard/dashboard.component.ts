import {Component, OnInit} from '@angular/core';
import {User} from "../auth/entities/user";
import {AuthService} from "../auth/auth.service";
import {Store} from "@ngrx/store";
import {logout} from "../auth/+state/auth.actions";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  user!: User

  constructor(private authService: AuthService, private store: Store,) {
  }

  ngOnInit(): void {
    this.loadUserFromLocalStorage()
  }

  loadUserFromLocalStorage(): void {
    const saveUser = localStorage.getItem('user');
    if (saveUser) {
      this.user = JSON.parse(saveUser);
    }
  }

  logout() {
    this.store.dispatch(logout())
  }
}
