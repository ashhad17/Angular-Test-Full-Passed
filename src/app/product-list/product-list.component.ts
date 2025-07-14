import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { Product } from '../models/Product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  //todo: complete missing code..

  filterdProducts$:Observable<Product[]>=of([]);
  products$:Observable<Product[]>=of([]);
  
  addNewProduct=false;
  constructor(public service:ProductService){}
  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts(){
    this.products$=this.service.getProducts();
    this.filterdProducts$=this.products$;
  }
  searchProducts(e:any){
    const serchTerm=e.target.value.toLowerCase();

    this.filterdProducts$=this.products$.pipe(
      map(products=>products.filter((p)=>p.productName.toLowerCase().includes(serchTerm)|| p.id.toString().includes(serchTerm)))
    )

  }
  addProduct(newProduct:Product){
    this.service.addProduct(newProduct).subscribe(
    )
  }

}

