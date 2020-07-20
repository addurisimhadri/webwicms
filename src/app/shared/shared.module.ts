import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MymaterialModule } from '../mymaterial/mymaterial.module';
import {FlexLayoutModule} from '@angular/flex-layout'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [   
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MymaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class SharedModule { }