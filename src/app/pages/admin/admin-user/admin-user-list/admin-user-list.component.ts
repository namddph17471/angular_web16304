import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { UserType } from 'src/app/types/Auth';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  users:UserType[]
  constructor(
    private userService:AuthService,
    private toastr: ToastrService
  ) { 
    this.users = []
  }

  ngOnInit(): void {
    this.onGetList();
   }
   onGetList(){
     this.userService.getUsers().subscribe((data) =>{
       this.users = data
     })
   }
   onUpdateStatus(id:string,newStatus:number){
     this.userService.updateUser(id,{
       status:newStatus
     }).subscribe(data =>{
       this.toastr.success('Cập nhật thành công')
       this.onGetList()
     })
   }
   onDelete(id: string){
     const confirm = window.confirm("Bạn có chắc muốn xóa ?")
     if (confirm && id) {
       this.userService.deleteProduct(id).subscribe((data)=>{
         this.toastr.success('Xóa thành công')
         this.onGetList();
       })
     }
   }
}
