import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm:FormGroup;
  productId:string
  constructor(private productService : ProductService,
    private router: Router ,
    private activateRoute : ActivatedRoute
    ) { 
    this.productForm = new FormGroup({
      name:new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        this.onValidateName
      ]) ,//FormControl(giá trị mặc định)
      price: new FormControl(0,[
        Validators.required,
        Validators.min(0)
      ])
    });
    this.productId = ''
  }

  ngOnInit(): void {
     this.productId = this.activateRoute.snapshot.params['id']
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe(data =>{
        this.productForm.patchValue({ // cập nhật data cho form
          name:data.name,
          price:data.price
        })
      })
    }
  }
  onValidateName (control : AbstractControl): ValidationErrors|null{
    const inputvalue = control.value
    if (inputvalue &&inputvalue.length >6 && !inputvalue.includes('product')) {
      return {hasProductsError: true}
    }
    return null
  }
  redireicToList(){
    this.router.navigateByUrl('/admin/products')
  }
  onSubmit(){
    // console.log(this.productForm.value)
    // nhận dl từ form
    const data = this.productForm.value
    if (this.productId!== '' && this.productId !== undefined) {
      return  this.productService.updateProduct(this.productId,data).subscribe(data =>{
          this.redireicToList()
        })
    }
    // call API tạo mới
    return this.productService.createProduct(data).subscribe(data =>{
      // quay lại danh sách products
      alert("Thêm thành công")
      // this.router.navigate(['/admin','products'])
      this.redireicToList()
      // khi quay về list thỳ ngOnInit trg list sẽ đc chạy và call API lấy ds mới
    })
  }
}
