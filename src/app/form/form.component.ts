import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  inputValue = {
    id:0,
    name:'',
    age:0,
    email:'',
    avatar:'',
    sdt:'',
  }
  users = [ 
    {
      id:1,
      name:'vothuy',
      age:44,
      avatar:"https://picsum.photos/50/50",
      sdt:"0123456789",
      email:'vothuy@gmail.com'
    },
    {
      id:10,
      name:'vothuy2',
      age:43,
      avatar:"https://picsum.photos/50/50",
      sdt:'0123456789',
      email:'vothuy2@gmail.com'
    },
    {
      id:19,
      name:'vothuy3',
      age:49,
      avatar:"https://picsum.photos/50/50",
      sdt:'0123456789',
      email:'vothuy3@gmail.com'
    }
]
  onSubmit = (userForm:NgForm)=>{
    const userIds = this.users.map(user => user.id).sort((a,b)=>a-b)
    const newId = userIds[userIds.length - 1]
    if (this.inputValue.id === 0) {
      this.users.push({
        ...userForm.value,
        id:newId + 1
      });
    }else{
      // const update = userForm.value
      // console.log(update)
      // this.users.map(user => user.id == update.id? update:user)
      const idx = this.users.findIndex(user => user.id === this.inputValue.id)
      if (idx > -1) {
        this.users[idx] = {
          ...userForm.value,
          id:this.inputValue.id
        }
      }
    }
    userForm.resetForm({
      name:'',
      age:0,
      avatar:'',
      sdt:'',
      email:''
    })
  }
  onEdit = (userId:number)=>{
    const editUser = this.users.find((user => user.id === userId))
    if (editUser) {
      // console.log(editUser)
      this.inputValue = {...editUser}
    }
  }
  onDelete = (userId:number)=>{
  this.users =   this.users.filter(user => user.id !== userId)
  }

}
