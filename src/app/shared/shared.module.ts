import { AngularSvgIconModule, SvgIconRegistryService } from 'angular-svg-icon';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarDirective } from './directives/navbar.directive';
import { NavigationChainComponent } from './navbar/navigation-chain/navigation-chain.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClickStopPropagation } from './directives/click-stop-propagation.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    NavigationChainComponent,
    NavbarDirective,
    ClickStopPropagation
  ],
  providers: [SvgIconRegistryService],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [
    NavbarComponent,
    NavigationChainComponent,
    NavbarDirective,
    ClickStopPropagation

  ],
})
export class SharedModule { }
