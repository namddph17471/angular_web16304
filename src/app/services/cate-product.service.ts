import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CateProductType, CateProductCreateType } from '../types/CateProduct';

@Injectable({
  providedIn: 'root'
})
export class CateProductService {

  constructor(
    private http:HttpClient
  ) { }
  getCateProducts():Observable<CateProductType[]>{
    return this.http.get<CateProductType[]>(environment.cateProduct)
  }
  getCateProduct(id:string):Observable<any>{
    return this.http.get<any>(`${environment.cateProduct}/${id}`)
  }
  deleteCateProduct(id:string):Observable<any>{
    return this.http.delete(`${environment.cateProduct}/${id}`)
  }
  createCateProduct(data:CateProductCreateType):Observable<CateProductCreateType>{
    return this.http.post<CateProductType>(environment.cateProduct,data)
  }
  updateCateProduct(id:string,data:CateProductCreateType):Observable<CateProductType>{
    return this.http.patch<CateProductType>(`${environment.cateProduct}/${id}`,data)
  }
}