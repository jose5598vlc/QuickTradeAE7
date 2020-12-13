import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  titulo: string = "PRODUCTOS";

  nombre: string;
  descripcion: string;
  precio: number;

  Categoria: 1;

  kilometros: number;
  anyo: number;

  metros: number;
  banyos: number;
  habitaciones: number;
  localidad: string;

  estado: string;

  constructor() {}

}


