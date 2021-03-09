import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from './navbar/navbar.component';
import { NavigationChainComponent } from './navbar/navigation-chain/navigation-chain.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavigationChainComponent
  ],
  providers: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    NavigationChainComponent,
  ],
})
export class SharedModule { }
