import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-resgiter',
  templateUrl: './resgiter.component.html',
  styleUrls: ['./resgiter.component.css']
})
export class ResgiterComponent implements OnInit {
  resgiterForm:FormGroup
  constructor(
    private authService:AuthService,
    private router:Router,
    private toastr:ToastrService
  ) {
    this.resgiterForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
      ]),
    })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    const submitData = this.resgiterForm.value
    this.authService.resgiter(submitData).subscribe(data =>{
      this.toastr.success('Đăng ký thành công')
      this.router.navigateByUrl('/auth/dang-nhap')
    },error =>{
      this.toastr.error(error.error.message)
      // this.toastr.error(error)
    })
  }
}
