import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CanAccessAdminGuard implements CanActivate {
  constructor (
    private router:Router, // cần router để điểu hướng nếu false
    private toastr:ToastrService,
    private lgSevice:LocalStorageService
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //1 lấy tt user trg localstorage
    const {user} = this.lgSevice.isAuthentiCate()
    console.log(user)
    //2 kiểm tra e tt có chính xác không
    if (user && user.role === 1) {
      return true
    }
    if (user && user.role !==1) {
      this.toastr.warning('Bạn không phải Admin')
      this.router.navigateByUrl('/auth/dang-nhap')
    }
    // đúng thỳ đi tiếp sai về login
    if (!user) {
      this.toastr.warning('Bạn phải đăng nhập mới được vào trang admin')
      this.router.navigateByUrl('/auth/dang-nhap')
    }
    return false
  }
  
}
