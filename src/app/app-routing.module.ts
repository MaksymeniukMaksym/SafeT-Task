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
      {
        path: '**',
        loadChildren: () => import('./modules/not-found/not-found.module').then((m) => m.NotFoundModule),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
