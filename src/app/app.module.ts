import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MymaterialModule } from './mymaterial/mymaterial.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { InterceptorService } from './services/authentication/interceptor.service';
import { ApproveContentComponent } from './modules/upload/approve-content/approve-content.component';
import { ViewContentComponent } from './modules/content/view-content/view-content.component';
import { EditContentComponent } from './modules/content/edit-content/edit-content.component';
import { DeleteContentComponent } from './modules/content/delete-content/delete-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApproveContentComponent,
    ViewContentComponent,
    EditContentComponent,
    DeleteContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MymaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
