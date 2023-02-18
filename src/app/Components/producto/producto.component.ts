import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/Interfaces/Productos';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent {
  @Input()
  data!: Producto;

  @Output()
  reload= new EventEmitter();
  delete() {
    this.reload.emit()
  }
}
