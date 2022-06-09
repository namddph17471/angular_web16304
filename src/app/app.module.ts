import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { TableNameComponent } from './table/table-name/table-name.component';
import { TableGenderComponent } from './table/table-gender/table-gender.component';
import { TableStatusComponent } from './table/table-status/table-status.component';
import { TableAvatarComponent } from './table/table-avatar/table-avatar.component';
import { FormsModule } from '@angular/forms';
// ReactiveFormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './pages/auth/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './pages/about/about.component';
import { ResgiterComponent } from './pages/auth/resgiter/resgiter.component';
import { AdminCateProductListComponent } from './pages/admin/admin-cateProduct/admin-cate-product-list/admin-cate-product-list.component';
import { AdminCateProductFormComponent } from './pages/admin/admin-cateProduct/admin-cate-product-form/admin-cate-product-form.component';
import { DetailProductComponent } from './pages/product/detail-product/detail-product.component';
import { ShowCartComponent } from './pages/show-cart/show-cart.component';
import { ListProductComponent } from './pages/product/list-product/list-product.component';
import { CateProductListComponent } from './pages/cateProduct/cate-product-list/cate-product-list.component';
import { CateProductDetailComponent } from './pages/cateProduct/cate-product-detail/cate-product-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableNameComponent,
    TableGenderComponent,
    TableStatusComponent,
    TableAvatarComponent,
    FormComponent,
    ShowValidateComponent,
    UserComponent,
    UserListComponent,
    UserFormComponent,
    HomeComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    AdminProductListComponent,
    AdminProductDetailComponent,
    AdminProductFormComponent,
    LoginComponent,
    CartComponent,
    AboutComponent,
    ResgiterComponent,
    AdminCateProductListComponent,
    AdminCateProductFormComponent,
    DetailProductComponent,
    ShowCartComponent,
    ListProductComponent,
    CateProductListComponent,
    CateProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
