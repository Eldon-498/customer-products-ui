import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = `${environment.baseUrl}`
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(`${this.apiUrl}/products`)
  }

  getCustomers(){
    return this.http.get(`${this.apiUrl}/customers`)
  }
}
