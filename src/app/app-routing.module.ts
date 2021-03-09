import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'infrastructure',
        loadChildren: () => import('./modules/infrastructure/infrastructure.module').then((m) => m.InfrastructureModule),
      },

    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
