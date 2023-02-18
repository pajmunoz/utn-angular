import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto, ProductoDescripcion, Descripcion } from 'src/app/Interfaces/Productos';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent {
  loader:boolean = true;
  id: string;
  producto!:ProductoDescripcion
  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.init();
  }
  async init() {
    try {
      const producto:Producto = await this.productosService.getById(this.id);
      const descripcion:Descripcion = await this.productosService.getDescriptioinById(this.id)
      this.producto ={detalle:producto,descripcion}
      this.loader=false
    } catch (e) {
      console.log(e);
    }
  }
}
