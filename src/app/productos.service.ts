import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//sirve para convertit a promise
import { lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private http: HttpClient) {}
  getAll() {
    //OBSERVABLE
    return this.http.get(
      'https://api.mercadolibre.com/sites/MLA/search?q=ipod'
    );
  }
  getAllPromise() {
    //"lastValueFrom" CONVIERTE OBSERVABLE EN PROMESA
    return lastValueFrom(
      this.http.get('https://api.mercadolibre.com/sites/MLA/search?q=ipod')
    );
  }
  getAllPipe() {
    return lastValueFrom(
      this.http
        .get('https://api.mercadolibre.com/sites/MLA/search?q=ipod')
        .pipe(map((value: any) => value.results))
    );
  }
}
