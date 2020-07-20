import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { PostsComponent } from '../../modules/posts/posts.component';
import {MatSidenavModule} from '@angular/material/sidenav'

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule    ,
    RouterModule,
    SharedModule,
    MatSidenavModule
  ]
})
export class DefaultModule { }
