import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { schemes } from '../scheme/errors';
console.log(schemes);
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent {
  myForm: FormGroup;
  error1 = schemes.one;
  error2 = schemes.two;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: [''],
      correo: ['', [Validators.required]],
      clave: ['', [Validators.required]],
    });
  }

  registrarse() {
    console.log(this.myForm.value);
  }
}
