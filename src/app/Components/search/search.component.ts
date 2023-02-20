import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  

  @Output()
  search= new EventEmitter();
  inputProducto:string = ''
  buscar(){
    console.log(this.inputProducto)
    this.search.emit(this.inputProducto)
    
  }
}

