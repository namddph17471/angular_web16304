import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeLoginRequest, TypeLoginResponse, TypeResgiterRequest, TypeResgiterResponse, UserType, UserUpdateType } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }
  login(data : TypeLoginRequest):Observable<TypeLoginResponse>{
    return this.http.post<TypeLoginResponse>(environment.login,data)
  }
  resgiter(data : TypeResgiterRequest):Observable<TypeResgiterResponse>{
    return this.http.post<TypeResgiterResponse>(environment.resgiter,data)
  }
  getUsers():Observable<UserType[]>{
    return this.http.get<UserType[]>(environment.users)
  }
  getUser(id:string):Observable<UserType>{
    return this.http.get<UserType>(`${environment.users}/${id}`)
  }
  updateUser(id:string ,data:UserUpdateType): Observable<UserType>{
    return this.http.patch<UserType>(`${environment.users}/${id}`,data);
  }
  deleteProduct(id : string):Observable<any>{
    return this.http.delete(`${environment.users}/${id}`)
  }
}
