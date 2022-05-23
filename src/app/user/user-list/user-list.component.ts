import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users:any
  @Output() handleRemove:EventEmitter<number>
  @Output() handleEdit:EventEmitter<number>
  constructor() {
    this.handleRemove = new EventEmitter(),
    this.handleEdit = new EventEmitter()
   }

  ngOnInit(): void {
  }
  onEdit = (userId:number)=>{
    this.handleEdit.emit(userId)
  }
  onDelete = (userId:number)=>{
    this.handleRemove.emit(userId)
  }
}
