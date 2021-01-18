import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Key } from 'protractor';
import { IProductoTec, IProductoHog, IProductoInm, IProductoMot } from '../home/interfaces';
import {listaproductosservices} from '../services/listado-services';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  

  id: number;
  res: (IProductoHog | IProductoTec | IProductoInm | IProductoMot);

  constructor(private _activatedRoute : ActivatedRoute, private _listadoProducto : listaproductosservices) { }


    ngOnInit() {  //Método que se realiza autoáticamente en el momento de cargar el componente.
      this.id = +this._activatedRoute.snapshot.paramMap.get('id');  //id es el parámetro que hemos recibido del home.page
  
      //Código AE9//
      /*
      this.res = this._listadoProducto.getProducto(this.id); //Recupera con el id facilitado, el producto con ese id de la pagina listaProductos.services
    */

    // codigo ae10 recuperar solo informacion sobre los que se haya hecho click
   let ref = this._listadoProducto.getListasProductos();

   ref.once("value", snapshot => (
     snapshot.forach(child => {
       let value = child.value();
       console.log("he encontrado "+child.value().nombre, +child.value().id, +child.value().descripcion, + child.value().precio);
     })
   ))
  }

}
