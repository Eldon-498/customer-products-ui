import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {AuthModule} from "./auth/auth.module";
import {BrowserModule} from "@angular/platform-browser";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule.forRoot(),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),

  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule { }
