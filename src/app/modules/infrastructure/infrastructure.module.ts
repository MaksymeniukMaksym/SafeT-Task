import { InfrastructureRoutingModule } from './infrastructure-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfrastructureComponent } from './infrastructure.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    InfrastructureRoutingModule,
    SharedModule,
  ],
  declarations: [InfrastructureComponent],

})
export class InfrastructureModule { }
