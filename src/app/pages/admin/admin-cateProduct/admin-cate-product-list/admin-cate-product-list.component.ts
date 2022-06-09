import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CateProductService } from 'src/app/services/cate-product.service';
import { CateProductType } from 'src/app/types/CateProduct';

@Component({
  selector: 'app-admin-cate-product-list',
  templateUrl: './admin-cate-product-list.component.html',
  styleUrls: ['./admin-cate-product-list.component.css']
})
export class AdminCateProductListComponent implements OnInit {
  cateProducts: CateProductType[]
  constructor(
    private cateProductService: CateProductService,
    private toastr: ToastrService
  ) {
    this.cateProducts = []
   }

  ngOnInit(): void {
    this.onGetList()
  }
  onGetList(){
    this.cateProductService.getCateProducts().subscribe((data) =>{
      this.cateProducts = data
    })
  }
  onUpdateStatus(id:string,newStatus:number){
    this.cateProductService.updateCateProduct(id,{
      status:newStatus
    }).subscribe(data =>{
      this.toastr.success('Cập nhật thành công')
      this.onGetList()
    })
  }
  onDelete(id:string){
    const confirm = window.confirm("Bạn có chắc muốn xóa?")
    if(confirm){
      this.cateProductService.deleteCateProduct(id).subscribe(data =>{
        this.toastr.success("Xóa thành công")
        this.onGetList()
      })
    }
  }
}
