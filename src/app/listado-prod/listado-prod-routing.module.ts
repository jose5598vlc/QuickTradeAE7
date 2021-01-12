import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoProdPage } from './listado-prod.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoProdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoProdPageRoutingModule {}
