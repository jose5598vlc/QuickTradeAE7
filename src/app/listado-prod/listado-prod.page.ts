import { Component, OnInit } from '@angular/core';
import { listaproductosservices } from '../services/listado-services';
import { ActivatedRoute } from '@angular/router';
import { IProductoTec, IProductoHog, IProductoInm, IProductoMot } from '../home/interfaces';

@Component({
  selector: 'app-listado-prod',
  templateUrl: './listado-prod.page.html',
  styleUrls: ['./listado-prod.page.scss'],
})
export class ListadoProdPage implements OnInit {

  producto: (IProductoHog | IProductoTec | IProductoInm | IProductoMot)[] = [];
  option: string = "";  

  constructor(private _activatedRoute: ActivatedRoute, private _listadoProducto: listaproductosservices) { }

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

}
