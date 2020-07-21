import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { PostsComponent } from '../../modules/posts/posts.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FileUploadComponent} from '../../modules/upload/file-upload/file-upload.component'
import {FileUploadService} from '../../services/upload/file-upload.service'
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule    ,
    RouterModule,
    SharedModule,
    MatSidenavModule
  ],
  providers:[
    FileUploadService
  ]
})
export class DefaultModule { }
