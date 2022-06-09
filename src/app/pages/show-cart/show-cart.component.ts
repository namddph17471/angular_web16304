import { Component, OnInit } from '@angular/core';
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
    private lsService:LocalStorageService
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
    this.cartItems.forEach(item => {
        this.cartItemValues += item.value;
        this.total += item.price * item.value
      })
      console.log(this.cartItemValues);
  }
}
