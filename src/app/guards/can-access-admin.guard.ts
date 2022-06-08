import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessAdminGuard implements CanActivate {
  constructor (
    private router:Router, // cần router để điểu hướng nếu false
    private toastr:ToastrService
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
    this.toastr.warning('Bạn phải đăng nhập mới được vào trang admin')
    this.router.navigateByUrl('/auth/login')
    return false
  }
  
}
