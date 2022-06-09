import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CateProduct, CateProductCreate } from '../types/CateProduct';

@Injectable({
  providedIn: 'root'
})
export class CateProductService {

  constructor(
    private http:HttpClient
  ) { }
  getCateProducts():Observable<CateProduct[]>{
    return this.http.get<CateProduct[]>(environment.cateProduct)
  }
  getCateProduct(id:string):Observable<any>{
    return this.http.get<any>(`${environment.cateProduct}/${id}`)
  }
  deleteCateProduct(id:string):Observable<any>{
    return this.http.delete(`${environment.cateProduct}/${id}`)
  }
  createCateProduct(data:CateProductCreate):Observable<CateProductCreate>{
    return this.http.post<CateProduct>(environment.cateProduct,data)
  }
  updateCateProduct(id:string,data:CateProductCreate):Observable<CateProduct>{
    return this.http.patch<CateProduct>(`${environment.cateProduct}/${id}`,data)
  }
}