import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/app/types/Product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products:ProductType[]
  constructor(
    private productService :ProductService
  ) { 
    this.products = []
  }

  ngOnInit(): void {
    this.onGetListProduct()
  }
  onGetListProduct(){
    this.productService.getProducts().subscribe(data =>{
      this.products = data
    })
  }
}
