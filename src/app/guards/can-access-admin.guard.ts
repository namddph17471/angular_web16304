import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessAdminGuard implements CanActivate {
  constructor (
    private router:Router // cần router để điểu hướng nếu false
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //1 lấy tt user trg localstorage
    const loggedInUser = localStorage.getItem('loggedInUser');
    //2 kiểm tra e tt có chính xác không
    if (loggedInUser) {
      return true
    }
    // đúng thỳ đi tiếp sai về login
    this.router.navigateByUrl('/auth/login')
    return false
  }
  
}
