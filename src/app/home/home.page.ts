import { Component } from '@angular/core';
import { IProductoTec, IProductoHog, IProductoInm, IProductoMot } from '../interfaces';
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

  producto: (IProductoHog | IProductoTec | IProductoInm | IProductoMot)[] = [];


  constructor() {}


  // toast 

  /*
  async presentToast() {
    const toast = await this._toastCtrl.create({
      message: "el producto se ha insertado correctamente",
      duration : 1000,
      position: "bottom"

    });
    toast.present();
  }
  */

  insertar() {
 
    this.producto.push({"id" : this.producto.length+1,
                        "nombre" : this.nombre,
                        "descripcion" : this.descripcion,
                        "precio" : this.precio,
                        "categoria" : this.Categoria
  });

  console.log("se ha insertado el elemento");
  }

  
}






