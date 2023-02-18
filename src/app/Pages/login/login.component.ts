import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { text1, text2 } from '../../scheme/errors';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  myForm: FormGroup;
  error1 = text1;
  error2 = text2;
  name:string = ''
  durationInSeconds = 5;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private _snackBar: MatSnackBar) {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],

      
    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      duration: 3 * 1000,
    });
  }
  login() {
    this.auth.authenticate()
    this.router.navigate(['/'])
    console.log(this.myForm.value);
    this.name = this.myForm.value.nombre;
    localStorage.setItem("userName",this.name );
    this.openSnackBar("Bienvenido", this.name)
    
  }
}
