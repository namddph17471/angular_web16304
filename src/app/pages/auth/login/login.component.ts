import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(
    private authService : AuthService,
    private router : Router,
    private lgService : LocalStorageService,
    private toastr: ToastrService
  ) { 
    this.loginForm = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ])
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    const submitData = this.loginForm.value
    this.authService.login(submitData).subscribe(data =>{
      localStorage.setItem('loggedInUser',JSON.stringify(data))
      this.toastr.success('Đăng nhập thành công')
      const {user} = this.lgService.isAuthentiCate()
      if (user.role === 1) {
        this.router.navigateByUrl('/admin/products')
      }else{
        this.router.navigateByUrl('/')
      }
    },error =>{
      this.toastr.error(error.error.message)
      // this.toastr.error(error)
    })
  }
}
