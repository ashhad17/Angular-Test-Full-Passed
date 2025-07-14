import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
  
} from "@angular/forms";
import { Product } from "../models/Product";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"],
})
export class ProductFormComponent implements OnInit {
  productForm!:FormGroup;
  @Output() addProduct=new EventEmitter<Product>();
  productionStatus=['In Production','In Assembly','Shipped','Delivered'];
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.productForm=this.fb.group({
      productName:['',Validators.required],
      quantity:['',[Validators.required,Validators.min(2)]],
      destination:['',Validators.required],
      status:['',Validators.required],
      productionDate:['',Validators.required]
 
    })
  }
  //todo: complete missing code.
  onSubmit(){
    if(this.productForm.valid){
      this.addProduct.emit(this.productForm.value);
      this.productForm.reset();
    }
    else{
      this.productForm.markAllAsTouched();
    }
  }
}