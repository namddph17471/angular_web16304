import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
formValues = {
  id:0,
  name:'',
  age:0,
  email:'',
  avatar:'',
  sdt:'',
}
onParentSubmit = (formData: any)=>{
  const userIds = this.users.map(user => user.id).sort((a,b)=>a-b)
  const newId = userIds[userIds.length - 1]
  if (this.formValues.id === 0) {
    this.users.push({
      ...formData,
      id:newId + 1
    });
  }else{
    const idx = this.users.findIndex(user => user.id === this.formValues.id)
    if (idx > -1) {
      this.users[idx] = {
        ...formData,
        id:this.formValues.id
      }
    }
  }
}
onRemove = (userId:number)=>{
  const  confirm =  window.confirm("Bạn có chắc mún xóa ??")
  if (confirm) {
    this.users =  this.users.filter(user => user.id !== userId)
  }
}
onEdit = (userId: number)=>{
  const editUser = this.users.find((user => user.id === userId))
    if (editUser) {
    return  this.formValues = {...editUser}
    }
    return alert("User không tồn tại")
}
}
