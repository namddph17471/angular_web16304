import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',
    component: ClientLayoutComponent,
    children:[
     {
      path:'',
      component:HomeComponent
    },
    {
      path:'users',
      component:UserComponent
    }
    ]
  },
  {
    path:'admin',
    component:AdminLayoutComponent,
    canActivate:[CanAccessAdminGuard],// kiểm soát việc login trc khi vào admin
    children:[
      // {
      //   path:'',
      //   redirectTo:'users',
      //   pathMatch:'full'
      // },
      // {
      //   path:'users',
      //   component:UserComponent
      // }
      {
        path:'products',
        children :[
          {
            path:'',
            component:AdminProductListComponent
          },
          {
            path :'create',
            component:AdminProductFormComponent
          },
          {
            path:'edit/:id',
            component:AdminProductFormComponent
          },
          {
            path:':id',
            component:AdminProductDetailComponent
          }
        ]
      }
    ]
  },
  {
    path:'auth',
    children:[
      {
        path:'login',
        component:LoginComponent
      }
    ]
  }

  // {
  //   path:'user',
  //   component:UserComponent,
  //   // nếu có children k dùng component để render
  //   // nếu vẫn muốn sử dụng component => trg component phải có router-outlet
  //   children:[
  //     {
  //       path:'create',
  //       component:UserFormComponent
  //     },
  //     {
  //       path:'edit',
  //       component:UserFormComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[CanAccessAdminGuard] // đưa vào để route bên trên có thể dùng
})
export class AppRoutingModule { }
