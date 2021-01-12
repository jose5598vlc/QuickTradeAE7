
export interface IProductoHog{
    "id": string,
    "nombre": string,
    "descripcion": string,
    "precio": number,
    "categoria": string,
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

export interface IProductoKey extends IProductoHog{
    "key": string,
}


export interface IProductoMot extends IProductoHog{
    "estado": string,
    "km": number,
    "anyo": number
}

