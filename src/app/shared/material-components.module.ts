import { MatSortModule } from '@angular/material/sort';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  imports: [
    MatTableModule,
    MatSortModule,
  ],
  exports: [
    MatTableModule,
    MatSortModule
  ]
})
export class MaterialComponentsModule { }
