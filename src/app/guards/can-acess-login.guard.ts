import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CanAcessLoginGuard implements CanActivate {
  constructor (
    private router:Router, // cần router để điểu hướng nếu false
    private toastr:ToastrService,
    private lgSevice:LocalStorageService
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  const {user} = this.lgSevice.isAuthentiCate()
    //2 kiểm tra e tt có chính xác không
    if (user ) {
      this.toastr.warning('Bạn Đã đăng nhập')
      this.router.navigateByUrl('/')
    }
    
    return true
  }
}
