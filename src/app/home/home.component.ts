import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  productos: any = [];

  //importar servicio
  constructor(private productosService: ProductosService) {

    //OBSERVABLE

    /*this.productosService.getAll().subscribe({
      next: (response: any) => {
        console.log(response);
        this.productos = response['results'];
      },
      error: (error) => {
        console.log(error);
      },
    });*/

    //PROMISES - SE USA EN ESTE CASO YA QUE LOS DATOS NO CAMBIAN NO REQUIEREN SER OPSERVADOS NI ESPERAR CAMBIOS DE ELLOS
    
    this.productosService.getAllPipe()
    .then((response:any) => {
      this.productos = response;
    })
    .catch(e=>console.log(e))
    //this.init()
  }
  //ASYNC AWAIT
  /*async init(){
    const response:any = this.productos = await this.productosService.getAllPromise()
    this.productos = response['results']
  }*/
}
