import {Injectable} from '@angular/core';
import {IProductoHog, IProductoTec, IProductoInm, IProductoMot} from '../home/interfaces';
import { ActivatedRoute } from '@angular/router';

@Injectable()

export class listaproductosservices {
    //Código AE9//
    //Array donde guardamos todos los objetos (Producto), sean del tipo que sean. Se pueden ver sus tipos en interfaces.ts
    listadoProducto: (IProductoHog | IProductoTec | IProductoInm | IProductoMot)[] = [
        {
            id: "1",
            nombre: "Telefono",
            descripcion: "Iphone",
            precio: 900,
            categoria: "1"
        },
        {
            id: "2",
            nombre: "Ordenador",
            descripcion: "Macbook Pro",
            precio: 2300,
            categoria: "1"
        },
        {
            id: "3",
            nombre: "Tablet",
            descripcion: "Ipad",
            precio: 500,
            categoria: "1"
        },
        {
            id: "4",
            nombre: "Moto",
            descripcion: "Scooter",
            precio: 5000,
            estado: "Nueva",
            km: 5,
            anyo: 2020,
            categoria: "3"
        },
        {
            id: "5",
            nombre: "Casa",
            localidad: "Valencia",
            descripcion: "Unifamiliar",
            precio: 215000,
            estado: "Nueva",
            habitaciones: 3,
            metros: 230,
            banyos: 2,
            categoria: "2"
        },
        {
            id: "6",
            nombre: "Moto",
            descripcion: "Trail",
            precio: 4500,
            estado: "Usada",
            km: 5,
            anyo: 2017,
            categoria: "3"
        }
        

    ];
//Código AE9//
    //Método para devolver el array que ariba hemos creado. Devuelve cuaquier tipo de objeto (Ver en interfaces.ts)
    getListasProductos(): (IProductoHog | IProductoTec | IProductoInm | IProductoMot)[]{

        return this.listadoProducto;

    }

    //Código AE9//
    //Método donde pasamos el id(numero) y en el array de arriba encuentra un objeto con ese array.
    getProducto(id: string) : (IProductoHog | IProductoTec | IProductoInm | IProductoMot){
        return this.listadoProducto.find(x => x.id == id);
    }

}
