import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_we16304 test';
  // Phần Logic định nghĩa giá trị biến và sử dụng ở html
  class = 'WEB16304';
  // kiểu mảng
  teachers = [
    {
      id:1,
      name:'vothuy',
      age:50,
      gender:0,
      avatar:"https://picsum.photos/50/50",
      status:0
    },
    {
      id:2,
      name:'vothuy',
      age:27,
      gender:1,
      avatar:"https://picsum.photos/50/50",
      status:1
    },
    {
      id:3,
      name:'vothuy',
      age:90,
      gender:1,
      avatar:"https://picsum.photos/50/50",
      status:0
    },
    {
      id:4,
      name:'vothuy',
      age:27,
      gender:0,
      avatar:"https://picsum.photos/50/50",
      status:1
    }
  ]
  inputValue = '';
  changeInput = (event:any)=>{
    this.inputValue = event.target.value
  }
  inputValues = {
    name:'',
    age:'',
    avatar:'',
    gender:'0'
  }
  onInput = (event:any,key:'name'|'age'|'avatar'|'gender')=>{
    this.inputValues[key] = event.target.value
  }
  onSubmit = ()=>{
    console.log(this.inputValues)
    this.teachers.push({...this.inputValues,
       age:+this.inputValues.age,
       id: this.teachers.length +1,
      gender:+this.inputValues.gender,
      status:0})  
      this.inputValues = {
        name:'',
        age:'',
        avatar:'',
        gender:'0'
      }   
  }
  showStatus = true
  name = '';
  changeStatus = ()=>{
    this.showStatus = !this.showStatus
  }
  clickH1 = ()=>{
    this.name= "Vô thủy"
  }
}
