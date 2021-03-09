import { InfrastructureRoutingModule } from './infrastructure-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfrastructureComponent } from './infrastructure.component';


@NgModule({
  imports: [
    CommonModule,
    InfrastructureRoutingModule
  ],
  declarations: [InfrastructureComponent]
})
export class InfrastructureModule { }
