import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { HomeComponent } from './pages/home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserComponent } from './user/user.component';
import { AdminCateProductListComponent } from './pages/admin/admin-cateProduct/admin-cate-product-list/admin-cate-product-list.component';
import { ResgiterComponent } from './pages/auth/resgiter/resgiter.component';
import { AdminCateProductFormComponent } from './pages/admin/admin-cateProduct/admin-cate-product-form/admin-cate-product-form.component';
import { ListProductComponent } from './pages/product/list-product/list-product.component';
import { DetailProductComponent } from './pages/product/detail-product/detail-product.component';
import { ShowCartComponent } from './pages/show-cart/show-cart.component';
import { CateProductListComponent } from './pages/cateProduct/cate-product-list/cate-product-list.component';
import { CateProductDetailComponent } from './pages/cateProduct/cate-product-detail/cate-product-detail.component';
import { AdminUserListComponent } from './pages/admin/admin-user/admin-user-list/admin-user-list.component';
import { AdminUserFormComponent } from './pages/admin/admin-user/admin-user-form/admin-user-form.component';

const routes: Routes = [
  {
    path:'auth',
    children:[
      {
        path:'dang-nhap',
        component:LoginComponent
      },
      {
        path:'dang-ky',
        component:ResgiterComponent
      }
    ]
  },
  {
    path:'',
    component: ClientLayoutComponent,
    children:[
     {
      path:'',
      component:HomeComponent
    },
    {
      path:'about',
      component:AboutComponent
    },
    {
      path:'users',
      component:UserComponent
    },
    {
      path:'products',
      children:[
        {
          path:'',
          component:ListProductComponent
        },
        {
          path:':id',
          component:DetailProductComponent
        }
      ]
    },
    
    {
      path:'cateProduct',
      children:[
        {
          path:'',
          component:CateProductListComponent
        },
        {
          path:':id',
          component:CateProductDetailComponent
        }
      ]
    },
    
    {
      path:'cart',
      component:ShowCartComponent
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
      },
      {
        path:'cateProduct',
        children:[
          {
            path:'',
            component:AdminCateProductListComponent
          },
          {
            path:'create',
            component:AdminCateProductFormComponent
          },
          {
            path:'edit/:id',
            component:AdminCateProductFormComponent
          }
        ]
      },
      {
        path:'users',
        children:[
          {
            path:'',
            component:AdminUserListComponent
          },
          {
            path:'create',
            component:AdminUserFormComponent
          },
          {
            path:'edit/:id',
            component:AdminUserFormComponent
          }
        ]
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
