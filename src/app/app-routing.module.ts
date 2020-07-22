import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { LoginComponent } from './login/login.component';
import {AuthGuardService} from './services/authentication/auth-guard.service'
import { FileUploadComponent } from './modules/upload/file-upload/file-upload.component';

const routes: Routes = [
  {
    path:'' ,component:LoginComponent
  },

  {
    path:'db',component:DefaultComponent,
    children:[{
      path:'',component:DashboardComponent,canActivate:[AuthGuardService]
    },
    {
      path:'posts',component:PostsComponent,canActivate:[AuthGuardService]
    },
    {
      path:'fileUpload',component:FileUploadComponent,canActivate:[AuthGuardService]
    }
  ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
