import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
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
    children:[
      {
        path:'',
        redirectTo:'users',
        pathMatch:'full'
      },
      {
        path:'users',
        component:UserComponent
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
  exports: [RouterModule]
})
export class AppRoutingModule { }
