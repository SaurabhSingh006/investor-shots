import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AngularMaterialModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class LayoutModule { }
