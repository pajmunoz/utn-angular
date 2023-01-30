import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
titulo = "Pablo"
titulo2 = "Juan"
modificar = false
cambiarTitulo(){
  this.titulo = this.titulo2
  this.modificar=true
}
}
