import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { PostsComponent } from '../../modules/posts/posts.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FileUploadComponent} from '../../modules/upload/file-upload/file-upload.component'
import {FileUploadService} from '../../services/upload/file-upload.service'
import { MymaterialModule } from 'src/app/mymaterial/mymaterial.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentService } from 'src/app/services/content/content.service';
import { ContenttypeService } from 'src/app/services/content/contenttype.service';
import { ContentproviderService } from 'src/app/services/content/contentprovider.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule    ,
    AppRoutingModule,
    SharedModule,
    MatSidenavModule,
    MymaterialModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(
      )
  ],
  providers:[
    FileUploadService,
    ContentService,
    ContenttypeService,
    ContentproviderService
  ]
})
export class DefaultModule { }
