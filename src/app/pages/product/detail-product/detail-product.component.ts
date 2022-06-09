import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/app/types/Product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  product:ProductType;
  cartItemValue:number = 1
  constructor(
    private productService:ProductService,
    private lsService:LocalStorageService,
    private toastr:ToastrService,
    private activatedRoute:ActivatedRoute
  ) {
    this.product={
      _id:'0',
      cateProductId:'0',
      name:'',
      sale_price:0,
      desc:'',
      image:'',
      price:0,
      status:0
    }
   }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.productService.getProduct(id).subscribe(data =>{
      console.log(data)
      this.product = data
    })
  }
  onInputValueChange(event: any){
    this.cartItemValue = event.target.value
  }
  onAddToCart(){
    const addItem = {
      id: this.product._id,
      name: this.product.name,
      image: this.product.image,
      cateProductId: this.product.cateProductId,
      price: this.product.price,
      sale_price: this.product.sale_price,
      value: +this.cartItemValue
    };
    this.lsService.setItem(addItem);
    this.toastr.success("Thêm vào giỏ hàng thành công")
    this.cartItemValue = 1;
  }
}
