import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TypeLoginResponse } from 'src/app/types/Auth';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {
  userData:TypeLoginResponse
  constructor(
    private lgService:LocalStorageService,
    private router:Router,
    private toastr:ToastrService
  ) { 
    this.userData = {
      token : '',
      user :{
        _id:'',
        email:'',
        name:'',
        role:0
    }
    }
  }

  ngOnInit(): void {
    this.onGetUser()
    // this.lgService.watchService().subscribe(data =>{
    //   this.onGetUser()
    // })
  }
  onGetUser(){
    this.userData = this.lgService.isAuthentiCate()
  }
  onLogout(){
    this.lgService.logout()
    this.toastr.success("Đăng xuất thành công")
    this.router.navigateByUrl('/auth/dang-nhap')
  }
}
