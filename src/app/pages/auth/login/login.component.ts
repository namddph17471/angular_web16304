import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
  ) { 
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      name: new FormControl('')
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    const submitData = this.loginForm.value
    // console.log(this.loginForm.value)
    this.authService.login(submitData).subscribe(data =>{
      localStorage.setItem('loggedInUser',JSON.stringify(data))
      this.toastr.success('Đăng nhập thành công')
      this.router.navigateByUrl('/admin/products')
    },error =>{
      this.toastr.error(error.error.message)
      // this.toastr.error(error)
    })
  }
}
