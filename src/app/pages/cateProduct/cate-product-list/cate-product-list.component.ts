import { Component, OnInit } from '@angular/core';
import { CateProductService } from 'src/app/services/cate-product.service';
import { CateProductType } from 'src/app/types/CateProduct';

@Component({
  selector: 'app-cate-product-list',
  templateUrl: './cate-product-list.component.html',
  styleUrls: ['./cate-product-list.component.css']
})
export class CateProductListComponent implements OnInit {

  cateProducts: CateProductType[]
  constructor(
    private cateProductService: CateProductService
  ) {
    this.cateProducts = []
   }

  ngOnInit(): void {
    this.onGetList()
  }
  onGetList(){
    this.cateProductService.getCateProducts().subscribe((data) =>{
      this.cateProducts = data
    })
  }

}
