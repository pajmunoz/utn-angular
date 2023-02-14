export interface Picture{
  id: string,
  url: string,
}
export interface Producto{
  id:string;
  site_id:string;
  title:string;
  price: number;
  currency_id: string;
  thumbnail: string;
  pictures:Picture[];
  seller_address:{
      id: string
  }
  attributes:[{
      [k:string]:string | number
  }];
}
export interface Descripcion{
  plain_text:string
}
export interface ProductoDescripcion{
  detalle:Producto,
  descripcion:Descripcion
}

export interface ResponseProducto{
  site_id: string;
  query:string;
  results:Producto[]
}