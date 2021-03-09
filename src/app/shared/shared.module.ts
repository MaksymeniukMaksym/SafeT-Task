import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { NavigationChainComponent } from './navbar/navigation-chain/navigation-chain.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavigationChainComponent
  ],
  providers: [],
  imports: [],
  exports: [
    NavbarComponent,
    NavigationChainComponent
  ],
})
export class SharedModule { }
