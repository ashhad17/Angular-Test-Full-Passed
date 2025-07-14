import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
//todo: complete missing code..
api_url=environment.apiUrl;
constructor(private http:HttpClient){}
 
getProducts():Observable<Product[]>{
return this.http.get<Product[]>(`${this.api_url}/products`);
}
 
getProduct(id:number):Observable<Product>{
  return this.http.get<Product>(`${this.api_url}/products/${id}`);
}
 
addProduct(product:Product):Observable<any>{
  return this.http.post<any>(`${this.api_url}/products`,product);
}
 
}