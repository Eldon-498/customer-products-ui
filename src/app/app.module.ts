import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {AuthModule} from "./auth/auth.module";
import {BrowserModule} from "@angular/platform-browser";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CustomersComponent} from "./dashboard/data/customers/customers.component";
import {ProductsComponent} from "./dashboard/data/products/products.component";
import {authorizationInterceptor} from "./auth/interceptors/authorization.interceptor";



@NgModule({
  declarations: [AppComponent, DashboardComponent, CustomersComponent, ProductsComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule.forRoot(),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    AppRoutingModule,
    RouterOutlet,
    AuthModule

  ],
  providers: [provideHttpClient(
    withInterceptors([authorizationInterceptor])
  )],
})
export class AppModule { }
