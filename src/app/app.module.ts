import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {AuthModule} from "./auth/auth.module";
import {BrowserModule} from "@angular/platform-browser";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {DashboardComponent} from "./dashboard/dashboard.component";



@NgModule({
  declarations: [AppComponent, DashboardComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule.forRoot(),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    AppRoutingModule,
    RouterOutlet

  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule { }
