import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductType, ProductCreateType } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
// kb http để có đối tg Httpclient tg tác vs các phương thức khác cảu api
  constructor(private http:HttpClient) { }
  // kiểm dl Observable sẽ giúp lắng nghr API trả về kq
  getProducts():Observable<ProductType[]>{
    return this.http.get<ProductType[]>(`${environment.products}?_expand=cateProductId`)
  }
  getProduct(id:string):Observable<ProductType>{
    return this.http.get<ProductType>(`${environment.products}/${id}?_expand=cateProductId`)
  }
  readProduct(id:string):Observable<ProductType>{
    return this.http.get<ProductType>(`${environment.products}/${id}`)
  }
  deleteProduct(id : string):Observable<any>{
    return this.http.delete(`${environment.products}/${id}`)
  }
  // dl gửi đi {name:string,price:number}, nhân về {_id:string,name:string,price:number}
  createProduct(data : ProductCreateType ): Observable<ProductType>{
    return this.http.post<ProductType>(`${environment.products}`,data);
  }
  updateProduct(id:string ,data:ProductCreateType): Observable<ProductType>{
    return this.http.patch<ProductType>(`${environment.products}/${id}`,data);
  }
}
