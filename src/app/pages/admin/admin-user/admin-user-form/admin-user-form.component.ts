import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-user-form',
  templateUrl: './admin-user-form.component.html',
  styleUrls: ['./admin-user-form.component.css']
})
export class AdminUserFormComponent implements OnInit {
  userForm : FormGroup
  userId:string
  constructor(
    private authService: AuthService,
    private activatedRoute:ActivatedRoute,
    private toastr:ToastrService,
    private router:Router
  ) { 
    this.userForm = new FormGroup({
      name:new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      email:new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ])
    })
    this.userId = ''
  }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id']
    if (this.userId) {
      this.authService.getUser(this.userId).subscribe(data =>{
        const user = data
        this.userForm.patchValue({
          name:user.name,
          status:user.status
        })
      },error =>{
        this.toastr.error(error.error.message)
        // this.toastr.error(error)
      })
    }
  }
  redireicToList(){
    this.router.navigateByUrl('/admin/users')
  }
  onSubmit(){
    const data = this.userForm.value
    if (this.userId!== '' && this.userId !== undefined) {
      return  this.authService.updateUser(this.userId,data).subscribe(data =>{
          this.toastr.success('Cập nhật thành công')
          this.redireicToList()
        })
    }
    // call API tạo mới
    return this.authService.resgiter(data).subscribe(data =>{
      this.toastr.success("Thêm thành công")
      this.redireicToList()
    })
  }
}
