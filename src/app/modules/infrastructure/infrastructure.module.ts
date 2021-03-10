import { InfrastructureRoutingModule } from './infrastructure-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfrastructureComponent } from './infrastructure.component';
import { AngularSvgIconModule } from 'angular-svg-icon';


@NgModule({
  imports: [
    CommonModule,
    InfrastructureRoutingModule,
  ],
  declarations: [InfrastructureComponent],

})
export class InfrastructureModule { }
