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

  ngOnInit() {
  }

}
