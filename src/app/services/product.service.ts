import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductCreate } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
// kb http để có đối tg Httpclient tg tác vs các phương thức khác cảu api
  constructor(private http:HttpClient) { }
  // kiểm dl Observable sẽ giúp lắng nghr API trả về kq
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(environment.products)
  }
  getProduct(id:string):Observable<Product>{
    return this.http.get<Product>(`${environment.products}/${id}`)
  }
  deleteProduct(id : string):Observable<any>{
    return this.http.delete(`${environment.products}/${id}`)
  }
  // dl gửi đi {name:string,price:number}, nhân về {_id:string,name:string,price:number}
  createProduct(data : ProductCreate ): Observable<Product>{
    return this.http.post<Product>(`${environment.products}`,data);
  }
}
