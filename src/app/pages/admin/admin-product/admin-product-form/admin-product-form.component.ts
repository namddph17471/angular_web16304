import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CateProductService } from 'src/app/services/cate-product.service';
import { ProductService } from 'src/app/services/product.service';
import { CateProductType } from 'src/app/types/CateProduct';
@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm:FormGroup;
  productId:string;
  cateProducts:CateProductType[]
  constructor(
    private productService : ProductService,
    private cateProductService : CateProductService,
    private router: Router ,
    private activateRoute : ActivatedRoute,
    private toastr: ToastrService
    ) { 
    this.productForm = new FormGroup({
      name:new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        // this.onValidateName
      ]) ,//FormControl(giá trị mặc định)
      price: new FormControl(0,[
        Validators.required,
        Validators.min(0)
      ]),
      sale_price: new FormControl(0,[
        Validators.required,
        Validators.min(0)
      ]),
      desc: new FormControl('',[
        Validators.required,
      ]),
      image: new FormControl('',[
        Validators.required,
      ]),
      cateProductId: new FormControl('',[
        Validators.required,
      ]),
    });
    this.productId = '';
    this.cateProducts = []
  }

  ngOnInit(): void {
    this.onGetListCate()
     this.productId = this.activateRoute.snapshot.params['id']
    if (this.productId) {
      this.productService.readProduct(this.productId).subscribe(data =>{
        console.log(data,"edit")
        this.productForm.patchValue({ // cập nhật data cho form
          name:data.name,
          price:data.price,
          sale_price:data.sale_price,
          image:data.image,
          cateProductId:data.cateProductId,
          desc:data.desc
        })
      })
    }
  }
  onGetListCate(){
    this.cateProductService.getCateProducts().subscribe(data =>{
      this.cateProducts = data
    })
  }
  // onValidateName (control : AbstractControl): ValidationErrors|null{
  //   const inputvalue = control.value
  //   if (inputvalue &&inputvalue.length >6 && !inputvalue.includes('product')) {
  //     return {hasProductsError: true}
  //   }
  //   return null
  // }
  redireicToList(){
    this.router.navigateByUrl('/admin/products')
  }
  onSubmit(){
    // console.log(this.productForm.value)
    // nhận dl từ form
    const data = this.productForm.value
    if (this.productId!== '' && this.productId !== undefined) {
      return  this.productService.updateProduct(this.productId,data).subscribe(data =>{
          this.toastr.success('Cập nhật thành công')
          this.redireicToList()
        })
    }
    // call API tạo mới
    return this.productService.createProduct(data).subscribe(data =>{
      // quay lại danh sách products
      this.toastr.success("Thêm thành công")
      // this.router.navigate(['/admin','products'])
      this.redireicToList()
      // khi quay về list thỳ ngOnInit trg list sẽ đc chạy và call API lấy ds mới
    })
  }
}
