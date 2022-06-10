import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import {  ProductCartType } from 'src/app/types/Product';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {
  cartItems: ProductCartType[] = [];
  cartItemValues: number = 0;
  total:number = 0
  constructor(
    private lsService:LocalStorageService,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.onSetCartItems();
    this.lsService.watchService().subscribe(data => {
      this.onSetCartItems();
    });
  }
  onSetCartItems() {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    
    this.cartItemValues = 0
    this.total = 0
    this.cartItems.forEach(item => {
        this.cartItemValues += item.value;
        this.total += item.price * item.value
      })
  }
  onIncrease(id:string){
    this.lsService.increase(id)
    this.toastr.success("Cập nhật thành công")
  }
  onDecrease(id:string){
    this.lsService.decrease(id)
    this.toastr.success("Cập nhật thành công")
  }
  onRemove(id:string){
    this.lsService.remove(id)
    this.toastr.success("Xóa thành công")
  }
}
