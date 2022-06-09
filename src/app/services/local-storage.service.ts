import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductCartType } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  private seviceSubject = new Subject<string>()
  watchService(): Observable<any> {
    return this.seviceSubject.asObservable();
  }
  // Tất cả các xử lý của ls sẽ thực hiện ở đây, để kích hoạt việc lắng nghe

  getItem() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
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
}
