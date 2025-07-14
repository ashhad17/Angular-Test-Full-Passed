import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    productName: '',
    quantity: 0,
    productionDate: '',
    status: '',
    destination: ''
  };

  constructor() { }

  ngOnInit(): void {
  }
}
