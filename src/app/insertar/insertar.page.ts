import { Component, OnInit } from '@angular/core';
import { IProductoTec, IProductoHog, IProductoInm, IProductoMot } from '../home/interfaces';
import { ToastController } from '@ionic/angular';
import { listaproductosservices } from '../services/listado-services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.page.html',
  styleUrls: ['./insertar.page.scss'],
})
export class InsertarPage implements OnInit {


categoriaTec: String="Tecnología";
categoriaHog: String="Hogar";
categoriaInm: String="Inmobiliaria";
categoriaMot: String="Motor";

tecSelec: Boolean=true;
hogSelec: Boolean=false;
inmSelec: Boolean=false;
motSelec: Boolean=false;


//Datos a rellenar por el usuario
id: number = 0;
nombre: string = "";
descripcion: string = "";
precio: number = 0;
estado: string = "";
km: number = 0;
anyo: number = 0;
localidad: string = "";
metros: number = 0;
habitaciones: number = 0;
banyos: number = 0;
categoria: number = 0;




option: string = "";



producto: (IProductoHog | IProductoTec | IProductoInm | IProductoMot)[];



constructor(private _toastCtrl: ToastController, private _listadoProducto: listaproductosservices, private _activatedRoute: ActivatedRoute) {
  
}

ngOnInit() {

}



async presentToast() {  
  const toast = await this._toastCtrl.create({
    message: 'El producto se ha insertado correctamente',
    duration: 1000,
    position: "bottom"
  });
  toast.present();
}


insertarTec(){
  let productoTec: IProductoTec={
                                  "id": this.id,
                                  "nombre": this.nombre,
                                  "descripcion": this.descripcion,
                                  "estado": this.estado,
                                  "precio": this.precio,
                                  "categoria": this.categoria                
                                };
                                

              this._listadoProducto.setProducto(productoTec);
              this.presentToast();                 
  
}

insertarHom(){
  let productoHog: IProductoHog={
                                  "id": this.id,
                                  "nombre": this.nombre,
                                  "descripcion": this.descripcion,
                                  "precio": this.precio,
                                  "categoria": this.categoria
                                };
                                this._listadoProducto.setProducto(productoHog);
                                this.presentToast();

                              }

insertarInm(){
      let productoInm: IProductoInm={
                                      "id": this.id,
                                      "nombre": this.nombre,
                                      "descripcion": this.descripcion,
                                      "estado": this.estado,
                                      "localidad": this.localidad,
                                      "metros": this.metros,
                                      "habitaciones": this.habitaciones,
                                      "banyos": this.banyos,
                                      "precio": this.precio,
                                      "categoria": this.categoria
                                  };       

                                  this._listadoProducto.setProducto(productoInm);
                                  this.presentToast();

                            }

insertarMot(){
      let productoMot: IProductoMot={
                                      "id": this.id,
                                      "nombre": this.nombre,
                                      "descripcion": this.descripcion,
                                      "estado": this.estado,
                                      "km": this.km,
                                      "anyo": this.anyo,
                                      "precio": this.precio,
                                      "categoria": this.categoria
                                       };
                                       this._listadoProducto.setProducto(productoMot);
                                       this.presentToast();

                          }

                        }
