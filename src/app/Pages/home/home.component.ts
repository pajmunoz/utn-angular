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
  loader:boolean = true;

  radius: number | undefined;
  color: string | undefined;
  
  inputProducto:string = 'Angular curso'

  productos:Producto[] = []
  constructor(private productosService:ProductosService){
    this.init()
  }
  async init(){
    try{
      const response:any|ResponseProducto = await this.productosService.getAllPromise( this.inputProducto)
      this.productos=response.results   
      this.loader = false;
    }catch(e){
      console.log(e)
    }
  }
  eliminar(){
    console.log("delete home")
  }
  async buscar(){
    console.log(this.inputProducto)
    this.loader = true;
    try{
      const response:any|ResponseProducto = await this.productosService.getAllPromise( this.inputProducto)
      this.productos=response.results   
      this.loader = false;
      localStorage.setItem("search",this.inputProducto)
    }catch(e){
      console.log(e)
    }
  }


  
}