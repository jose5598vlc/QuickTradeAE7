import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'more-details/:key',
    loadChildren: () => import('./more-details/more-details.module').then( m => m.MoreDetailsPageModule)
  },
  {
    path: 'insertar/:id',
    loadChildren: () => import('./insertar/insertar.module').then( m => m.InsertarPageModule)
  },
  {
    path: 'listado-prod',
    loadChildren: () => import('./listado-prod/listado-prod.module').then( m => m.ListadoProdPageModule)
  },
  {
    path: 'listado-prod/:id',
    loadChildren: () => import('./listado-prod/listado-prod.module').then( m => m.ListadoProdPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
