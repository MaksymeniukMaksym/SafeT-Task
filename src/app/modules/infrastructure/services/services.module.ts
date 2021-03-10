import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { ServicesComponent } from './services.component';



const routes: Routes = [

  {
    path: '',
    component: ServicesComponent,

  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularSvgIconModule,

  ],
  declarations: [ServicesComponent]
})
export class ServicesModule { }
