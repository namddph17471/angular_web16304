import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CateProductService } from 'src/app/services/cate-product.service';
import { CateProductType } from 'src/app/types/CateProduct';
import { ProductType } from 'src/app/types/Product';

@Component({
  selector: 'app-cate-product-detail',
  templateUrl: './cate-product-detail.component.html',
  styleUrls: ['./cate-product-detail.component.css']
})
export class CateProductDetailComponent implements OnInit {
  cateProduct:CateProductType
  products:ProductType[]
  constructor(
    private cateProductService:CateProductService,
    private activatedRoute:ActivatedRoute
  ) {
    this.cateProduct = {
      _id:'',
      name:'',
      image:'',
      status:0
    },
    this.products = []
   }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.cateProductService.getCateProduct(id).subscribe(data =>{
      console.log(data)
      this.products = data.product
      this.cateProduct = data.cateProduct
    })
  }

}
