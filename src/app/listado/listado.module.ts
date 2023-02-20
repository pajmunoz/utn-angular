import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    NavbarComponent
  ],
  exports:[
    MainComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
  ]
})
export class ListadoModule { }
