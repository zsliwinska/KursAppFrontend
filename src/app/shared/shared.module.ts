import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexModule} from '@angular/flex-layout';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MaterialModule
  ]
})
export class SharedModule { }
