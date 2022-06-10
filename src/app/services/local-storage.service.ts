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
  // Tất cả các xử lý của ls sẽ thực hiện ở đây, để kích hoạt việc lắng nghe
  isAuthentiCate(){
    const user = JSON.parse(localStorage.getItem("loggedInUser") as string);

    if (!user) return false;

    this.seviceSubject.next(user)
    return user;
  }
  getItem() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }
  logout(){
    localStorage.removeItem("loggedInUser")
    this.seviceSubject.next('')
  }
  setItem(addItem:ProductCartType) {
    // Nghiệp vụ thêm sp vào giỏ
    // 1. Lấy ra toàn bộ sp trong giỏ
    const cartItems = this.getItem();
    // 2. kiểm tra trong giỏ đã có phần tử có id giống cartItem chưa
    const existItem = cartItems.find((item: ProductCartType) =>
      item.id === addItem.id
    );
    if (!existItem) {
      cartItems.push(addItem);
    } else {
      existItem.value += addItem.value;
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    // 3. Sau khi thêm sản phẩm vào giỏ bằng phương thức setItem này
    this.seviceSubject.next('');
    // thì watchStorage sẽ được phát sự kiện vào subscibe
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
    if (currentItem.value  <1) {
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
