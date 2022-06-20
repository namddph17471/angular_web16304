import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductCartType, ProductType } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  private seviceSubject = new Subject<any>()
  watchService(): Observable<any> {
    return this.seviceSubject.asObservable();
  }
  isAuthentiCate(){
    const user = JSON.parse(localStorage.getItem("loggedInUser") as string);

    if (!user) return false;
    return user;
  }
  getItem() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }
  logout(){
    localStorage.removeItem("loggedInUser")
  }
  setItem(addItem:ProductCartType) {
    const cartItems = this.getItem();
    const existItem = cartItems.find((item: ProductCartType) =>
      item.id === addItem.id
    );
    if (!existItem) {
      cartItems.push(addItem);
    } else {
      existItem.value += addItem.value;
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.seviceSubject.next('');
  }
  increase(id:string){
    let cartItems = this.getItem()
    const cartItem = cartItems.find((product:any) => product.id === id)
    cartItem.value++
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.seviceSubject.next('')
  }
  decrease(id:string){
    let cartItems = this.getItem()
    const currentItem = cartItems.find((product:any) => product.id === id)
    currentItem.value--
    localStorage.setItem('cart', JSON.stringify(cartItems));
    if (currentItem.value  < 1) {
     const confirm =  window.confirm("Bạn có muốn xóa sản phẩm này khỏi giỏ hàng không ?")
      if (confirm) {
        cartItems = cartItems.filter((item:any) => item.id !== currentItem.id)
        localStorage.setItem('cart', JSON.stringify(cartItems));
      }else{
        currentItem.value =1
        localStorage.setItem('cart', JSON.stringify(cartItems));
      }
    }
    this.seviceSubject.next('')
  }
  remove(id:string){
    let cartItems = this.getItem()
    const confirm =  window.confirm("Bạn có muốn xóa sản phẩm này khỏi giỏ hàng không ?")
    if (confirm) {
      cartItems = cartItems.filter((item:any) => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.seviceSubject.next('')
    }
    
  }
}
