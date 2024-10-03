import {Component, OnInit} from '@angular/core';
import {Customer} from "../entities/customer";
import {DataService} from "../data.service";

@Component({
  selector: 'customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent implements OnInit {
 customers: any = [];
 isLoading = true;


 constructor(private dataService:DataService) {
 }

 ngOnInit(){
   this.dataService.getCustomers().subscribe({
     next: res => {
       this.customers = res;
       this.isLoading = false;
     },
     error: error => {
       this.isLoading = false
     },

   })
 }

}
