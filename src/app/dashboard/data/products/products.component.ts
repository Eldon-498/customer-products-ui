import { Component } from '@angular/core';
import {Product} from "../entities/product";
import {DataService} from "../data.service";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
 products: any = [];
 isLoading: boolean = true;

 constructor(private dataService: DataService) {}
  ngOnInit(): void {
   this.dataService.getProducts().subscribe({
     next:(res)=>{
       this.products = res
       this.isLoading = false;
     },
     error:(error)=>{

     }
   })
  }

}
