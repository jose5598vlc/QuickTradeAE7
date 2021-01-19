import { Component, OnInit } from '@angular/core';
import { listaproductosservices } from '../services/listado-services';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { IProductoTec, IProductoHog, IProductoInm, IProductoMot, IProductoMeGusta } from '../home/interfaces';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-listado-prod',
  templateUrl: './listado-prod.page.html',
  styleUrls: ['./listado-prod.page.scss'],
})
export class ListadoProdPage implements OnInit {

  producto: (IProductoHog | IProductoTec | IProductoInm | IProductoMot)[] = [];
  option: string = "";  
  idUsuario : string = "0001"; // string idUsuario para me gusta
  // codigo examen, añadimos al constructor el toast para mostrar mensaje de 'me gusta' y el db de firebase
  constructor(private _activatedRoute: ActivatedRoute, private _listadoProducto: listaproductosservices, private _toastCtrl : ToastController, private _db: AngularFireDatabase) { }

  // codigo ae10, recupera productos y muestra valores: id, nombre, descripcion,precio y categoria
  ngOnInit() {
    
    let ref = this._listadoProducto.getListasProductos();

    ref.once("value", snapshot => (
      snapshot.forach(child => {
        let value = child.val();
        this.producto.push(value);
        console.log("he encontrado "+child.val().nombre, +child.val().id, +child.val().descripcion, + child.val().precio, +child.val().categoria);
      })
    ))
    
  }

  // codigo examen, mostrar toast cuando el usuario dé 'me gusta' a un producto
  async presentToast() {  
    const toast = await this._toastCtrl.create({
      message: 'El producto ha sido marcado con un "me gusta"',
      duration: 1000,
      position: "bottom"
    });
    toast.present();
  }

  // codigo examen, 'me gusta' a un producto y almacenarlo en la firebase 
  setmeGusta(meGusta: IProductoMeGusta) {
    let ref = this._db.database.ref("Productos");
    ref.push(meGusta);
    console.log("me gusta insertado correctamente");
    this.presentToast();
    
  }

  // codigo examen, cuando se da al boton me gusta se recupera de la bbdd el nombre del producto y el id
  meGusta() {
    let ref = this._listadoProducto.getListasProductos();

    ref.once("value", snapshot => (
      snapshot.foreach(child => {
        let value = child.val();
        this.producto.push(value);
        let idUsu = this.idUsuario;
        let mensaje = console.log("Me gusta:"+idUsu +child.val().nombre, child.val().id);
        return mensaje;
        
      })
    ))
  }



}
