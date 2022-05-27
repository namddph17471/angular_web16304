import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() inputValue:{
    id:number,
    name:string,
    age:number,
    email:string,
    avatar:string,
    sdt:string,
  }
  // định nghĩa sự kiện bắn dữ liệu ngược lại
  @Output() handleSubmit: EventEmitter<any>
  constructor() {
    // Khai báo giá trị default
    this.handleSubmit = new EventEmitter(),
    this.inputValue = {
      id:0,
      name:'',
      age:0,
      email:'',
      avatar:'',
      sdt:'',
    }
   }

  ngOnInit(): void {
  }
 
  onSubmit = (userForm:NgForm)=>{
    // Gưi DL đi
    this.handleSubmit.emit(userForm.value)
    userForm.resetForm({
      name:'',
      age:0,
      avatar:'',
      sdt:'',
      email:''
    })
  }
}
