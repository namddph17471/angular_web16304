import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CateProductService } from 'src/app/services/cate-product.service';

@Component({
  selector: 'app-admin-cate-product-form',
  templateUrl: './admin-cate-product-form.component.html',
  styleUrls: ['./admin-cate-product-form.component.css']
})
export class AdminCateProductFormComponent implements OnInit {
  cateProductForm:FormGroup
  cateProductId:string
  constructor(
    private cateProductService:CateProductService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private toastr: ToastrService
  ) { 
    this.cateProductForm = new FormGroup({
      name:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]) ,
      image:new FormControl('',[
        Validators.required,
      ]) 
    })
    this.cateProductId = ''
  }

  ngOnInit(): void {
    this.cateProductId = this.activateRoute.snapshot.params['id']
    if (this.cateProductId) {
      this.cateProductService.getCateProduct(this.cateProductId).subscribe(data =>{
        const {cateProduct} = data
        this.cateProductForm.patchValue({
          name:cateProduct.name,
          image:cateProduct.image,
          status:cateProduct.status
        })
      },error =>{
        this.toastr.error(error.error.message)
        // this.toastr.error(error)
      })
    }
  }
  redireicToList(){
    this.router.navigateByUrl('/admin/cateProduct')
  }
  onSubmit(){
    const data = this.cateProductForm.value
    if (this.cateProductId!== '' && this.cateProductId !== undefined) {
      return  this.cateProductService.updateCateProduct(this.cateProductId,data).subscribe(data =>{
          this.toastr.success('Cập nhật thành công')
          this.redireicToList()
        })
    }
    // call API tạo mới
    return this.cateProductService.createCateProduct(data).subscribe(data =>{
      this.toastr.success("Thêm thành công")
      this.redireicToList()
    })
  }
}
