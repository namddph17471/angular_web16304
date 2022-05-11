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
  students = [
    {
      id:'PH0001',
      name:'vothuy',
      status:0
    },
    {
      id:'PH0002',
      name:'vothuy2',
      status:1
    },
    {
      id:'PH0003',
      name:'vothuy3',
      status:0
    }
  ]
}
