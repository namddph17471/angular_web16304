import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CateProductService } from 'src/app/services/cate-product.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products:Product[]
  constructor( 
    private productService: ProductService,
    private cateProductService: CateProductService,
    private toastr:ToastrService
    ) {
    this.products = []
   }

  ngOnInit(): void {
   this.onGetList();
  }
  onGetList(){
    this.productService.getProducts().subscribe((data) =>{
      this.products = data
    })
  }
  onUpdateStatus(id:string,newStatus:number){
    this.productService.updateProduct(id,{
      status:newStatus
    }).subscribe(data =>{
      this.toastr.success('Cập nhật thành công')
      this.onGetList()
    })
  }
  onDelete(id: string){
    const confirm = window.confirm("Bạn có chắc muốn xóa ?")
    if (confirm && id) {
      this.productService.deleteProduct(id).subscribe((data)=>{
        this.toastr.success('Xóa thành công')
        this.onGetList();
      })
    }
  }

}
