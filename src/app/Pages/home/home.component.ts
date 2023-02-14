import { Component } from '@angular/core';
import { ProductosService } from '../../productos.service';
import { Producto, ResponseProducto } from 'src/app/Interfaces/Productos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  productos:Producto[] = []
  constructor(private productosService:ProductosService){
    this.init()
  }
  async init(){
    try{
      const response:any|ResponseProducto = await this.productosService.getAllPromise()
      this.productos=response.results   
    }catch(e){
      console.log(e)
    }
  }

  
}