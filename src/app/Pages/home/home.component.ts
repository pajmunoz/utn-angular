import { Component } from '@angular/core';
import { ProductosService } from '../../productos.service';
import { Producto, ResponseProducto } from 'src/app/Interfaces/Productos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  centered = false;
  disabled = false;
  unbounded = false;
  loader: boolean = true;

  radius: number | undefined;
  color: string | undefined;

  inputProducto: string = '';

  isInputProducto: boolean = false;
  showText: boolean = true;
  productos: Producto[] = [];
  constructor(private productosService: ProductosService) {
    this.init();
  }
  async init() {
    this.isInputProducto = this.inputProducto.length || !localStorage.getItem('search') ? true : false;
    this.inputProducto! = localStorage.getItem('search')
      ? String(localStorage.getItem('search'))
      : '';
      this.showText = this.isInputProducto?true:false;
    try {
      const response: any | ResponseProducto =
        await this.productosService.getAllPromise(this.inputProducto);
      this.productos = response.results;
      this.loader = false;
      
      
    } catch (e) {
      console.log(e);
    }
  }
  eliminar() {
    console.log('delete home');
  }
  async buscar() {
    this.loader = true;
    this.isInputProducto = this.inputProducto.length ? true : false;
    this.showText = !this.isInputProducto?true:false;
    console.log(this.isInputProducto);

    try {
      const response: any | ResponseProducto =
        await this.productosService.getAllPromise(this.inputProducto);
      this.productos = response.results;
      localStorage.setItem('search', this.inputProducto);
      this.loader = false;
    } catch (e) {
      console.log(e);
    }
  }
}
