import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoProdPageRoutingModule } from './listado-prod-routing.module';

import { ListadoProdPage } from './listado-prod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoProdPageRoutingModule
  ],
  declarations: [ListadoProdPage]
})
export class ListadoProdPageModule {}
