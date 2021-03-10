import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

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
    SharedModule,

  ],
  declarations: [ServicesComponent]
})
export class ServicesModule { }
