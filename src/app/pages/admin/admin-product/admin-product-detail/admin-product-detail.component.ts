import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  product:Product
  constructor( private productService: ProductService,
    private activavteRoute:ActivatedRoute 
    ) {
      this.product = {
        _id:'0',
        name:'',
        price:0,
        status:0
      }
     }
  ngOnInit(): void {
    const id = this.activavteRoute.snapshot.params['id']
    this.productService.getProduct(id).subscribe(data =>{
      this.product = data
    })
  }

}
