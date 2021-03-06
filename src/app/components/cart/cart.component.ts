import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductCartType } from 'src/app/types/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: ProductCartType[] = [];
  cartItemValues: number = 0;
  constructor(
    private lsService: LocalStorageService
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
        
      })
  }

}
