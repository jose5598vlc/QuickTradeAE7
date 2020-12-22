
export interface IProductoHog{
    "id": number,
    "nombre": string,
    "descripcion": string,
    "precio": number,
    "categoria": number,
}

export interface IProductoTec extends IProductoHog{ 
    "estado": string,
}


export interface IProductoInm extends IProductoHog{
    "localidad": string,
    "estado": string,
    "metros": number,
    "habitaciones": number,
    "banyos": number
}


export interface IProductoMot extends IProductoHog{
    "estado": string,
    "km": number,
    "anyo": number
}

