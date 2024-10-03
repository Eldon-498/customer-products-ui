import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../reducers";
import {Router} from "@angular/router";
import {login} from "../+state/auth.actions";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  isLoading = false
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  showPassword = false
  notificationMessage!: string ;
  notificationType!: 'success' | 'error';

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private authService: AuthService,

  ) {}

  getErrorMessage(controlName: string) {
    const control = this.loginForm.get(controlName) as FormControl
    if (control.hasError('email'))
      return 'Please provide a valid email address'

    return 'This field is required'
  }

  login() {
    if (this.loginForm.valid) {
      this.isLoading = true

      this.authService.login(this.loginForm.value).subscribe({
          next: (res: any) => {
            this.store.dispatch(login({user: res}))
            this.notificationMessage = 'Login successful!';
            this.notificationType = 'success';
            setTimeout(() => {
             void this.router.navigateByUrl('/dashboard');
            }, 1000);

          },
          error: (error) => {
            this.isLoading = false
            this.notificationMessage = 'Invalid credentials'
            this.notificationType = 'error';

          },
          complete: () => (this.isLoading = false),
        }
      )
    }
  }
}
