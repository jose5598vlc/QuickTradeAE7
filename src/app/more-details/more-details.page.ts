import { Component, OnInit } from '@angular/core';
import { listaproductosservices } from '../services/listado-services';
import { ActivatedRoute } from '@angular/router';
import { IProductoTec, IProductoHog, IProductoInm, IProductoMot} from '../interfaces';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.page.html',
  styleUrls: ['./more-details.page.scss'],
})
export class MoreDetailsPage implements OnInit {

  constructor(private _service: listaproductosservices, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  listadoProducto: (IProductoHog | IProductoTec | IProductoInm | IProductoMot)[] = [];

}


