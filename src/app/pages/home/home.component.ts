import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/app/types/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
