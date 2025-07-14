import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { Product } from '../models/Product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnInit{
  //todo: complete missing code..
  products$: Observable<Product[]> = of([]);

  filteredPrdouctSubject=new BehaviorSubject<Product[]>([]);
  filterdProducts$=this.filteredPrdouctSubject.asObservable();
  addNewProduct=false;
  constructor(private productService:ProductService){

  }
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.products$ = this.productService.getProducts();

    // populate the filtered subject initially
    this.products$.subscribe({
      next: (data) => this.filteredPrdouctSubject.next(data),
      error: () => this.filteredPrdouctSubject.next([]) // fallback in case of error
    });
  }
  searchProducts(e:any){
    const searchText=e.target.value;
    this.products$.pipe(
      map(products=>products.filter((p)=>p.productName.toLowerCase().includes(searchText.toLowerCase())|| p.id.toString().includes(searchText)))
    ).subscribe((data)=>this.filteredPrdouctSubject.next(data));
  }
 
  addProduct(newProduct:Product){
    this.productService.addProduct(newProduct).subscribe({
    })
  }
 
 
 
}
