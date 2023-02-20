import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { text1, text2 } from '../../scheme/errors';
console.log(text1);
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent {
  myForm: FormGroup;
  error1 = text1;
  error2 = text2;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['',[Validators.required, Validators.minLength(3)]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      ],
      correo: ['', [Validators.required, Validators.minLength(3)]],
      clave: ['', [Validators.required, Validators.minLength(8)]],
      clave2: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  registrarse() {
    console.log(this.myForm.value);
  }
}
