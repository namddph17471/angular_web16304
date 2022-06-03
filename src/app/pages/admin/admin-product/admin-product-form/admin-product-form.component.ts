import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm:FormGroup
  constructor(private productService : ProductService,
    private router: Router
    ) { 
    this.productForm = new FormGroup({
      name:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]) ,//FormControl(giá trị mặc định)
      price: new FormControl(0,[
        Validators.required,
        Validators.min(0)
      ])
    });
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.productForm.value)
    // nhận dl từ form
    const data = this.productForm.value
    // call API tạo mới
    this.productService.createProduct(data).subscribe(data =>{
      // quay lại danh sách products
      alert("Thêm thành công")
      this.router.navigate(['/admin','products'])
      // khi quay về list thỳ ngOnInit trg list sẽ đc chạy và call API lấy ds mới
    })

  }
}
