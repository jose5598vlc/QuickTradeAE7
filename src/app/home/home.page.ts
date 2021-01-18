import { Component } from '@angular/core';
import { IProductoTec, IProductoHog, IProductoInm, IProductoMot } from './interfaces';
import { ToastController } from '@ionic/angular';
import {listaproductosservices} from '../services/listado-services';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  titulo: string = "PRODUCTOS";

  id: number;
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
  oculto: boolean = false;
  texto: string = "ocultar";
  option: string = "";


  listadoProducto: (IProductoHog | IProductoTec | IProductoInm | IProductoMot)[] = [];



  constructor(private _toastCtrl: ToastController, private _listadoProducto: listaproductosservices) {
    
  }

  ngOnInit() {
    this.listadoProducto = this._listadoProducto.getListasProductos();
  }

  cambiarOculto() : void {
    this.oculto = !this.cambiarOculto;
    if(this.oculto==true) {
      this.texto="mostrar";
    } else {
      this.texto="ocultar";
    }
  }

  async presentToast() {
    const toast = await this._toastCtrl.create({
      message: "el producto se ha insertado correctamente",
      duration : 1000,
      position: "bottom"

    });
    toast.present();
  }
  

  insertar() {
 
    this.listadoProducto.push({ "id" : this.listadoProducto.length+1,
                        "nombre" : this.nombre,
                        "descripcion" : this.descripcion,
                        "precio" : this.precio,
                        "categoria" : this.Categoria
  });

  
  console.log("se ha insertado el elemento");
  }

  

  
}






