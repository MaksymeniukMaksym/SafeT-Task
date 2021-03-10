import { NgModule } from '@angular/core';
import { AngularSvgIconModule, SvgIconRegistryService } from 'angular-svg-icon';

import { ClickStopPropagation } from './directives/click-stop-propagation.directive';
import { HttpClientModule } from '@angular/common/http';
import { MaterialComponentsModule } from './material-components.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarDirective } from './directives/navbar.directive';
import { NavigationChainComponent } from './navbar/navigation-chain/navigation-chain.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NavbarComponent,
    NavigationChainComponent,
    NavbarDirective,
    ClickStopPropagation
  ],
  providers: [SvgIconRegistryService],
  imports: [
    AngularSvgIconModule.forRoot(),
    CommonModule,
    HttpClientModule,
    MaterialComponentsModule,
    RouterModule,
    AngularSvgIconModule,

  ],
  exports: [
    NavbarComponent,
    NavigationChainComponent,
    MaterialComponentsModule,
    NavbarDirective,
    ClickStopPropagation,
    AngularSvgIconModule,


  ],
})
export class SharedModule { }
