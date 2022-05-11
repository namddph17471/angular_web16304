import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_we16304 test';
  // Phần Logic định nghĩa giá trị biến và sử dụng ở html
  name = 'Trương';
  class = 'WEB16304';
  // kiểu mảng
  teachers = [
    {
      id:'PH0001',
      name:'vothuy',
      age:27,
      gender:0,
      avatar:"https://picsum.photos/70/70",
      status:0
    },
    {
      id:'PH0001',
      name:'vothuy',
      age:27,
      gender:1,
      avatar:"https://picsum.photos/70/70",
      status:1
    },
    {
      id:'PH0001',
      name:'vothuy',
      age:27,
      gender:1,
      avatar:"https://picsum.photos/70/70",
      status:0
    },
    {
      id:'PH0001',
      name:'vothuy',
      age:27,
      gender:0,
      avatar:"https://picsum.photos/70/70",
      status:1
    }
  ]
}
