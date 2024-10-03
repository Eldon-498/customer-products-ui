import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./+state/auth.effects";
import * as fromAuth from './+state/reducers';
import {LoginComponent} from "./login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {loginGuard} from "./guards/login.guard";



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forFeature(fromAuth.authFeatureKey,fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [
    LoginComponent,
  ],
  providers: [AuthService]
})

export class AuthModule {
  static forRoot() {
    return {
      ngModule: AuthModule,
      providers: []
    }
  }
}

