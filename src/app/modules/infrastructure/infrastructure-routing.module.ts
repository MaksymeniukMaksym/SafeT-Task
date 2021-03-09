import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfrastructureComponent } from './infrastructure.component';

const routes: Routes = [

  {
    path: '',
    component: InfrastructureComponent,
    children: [
      {
        path: 'services',
        loadChildren: () => import('./services/services.module').then((m) => m.ServicesModule),
      },

    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfrastructureRoutingModule { }
