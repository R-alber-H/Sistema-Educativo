import { Component, inject } from '@angular/core';
import {  Router } from "@angular/router";
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { AuthService } from '../../services/auth/auth-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

    formBuilder = inject(FormBuilder);
    auth = inject(AuthService);
    router = inject(Router)

    formularioLogin = this.formBuilder.group({
    correo: this.formBuilder.control('', [Validators.required, Validators.email]),
    password: this.formBuilder.control('', Validators.required)
  });

  login() {
  const { correo, password } = this.formularioLogin.value;

  this.auth.login(correo!, password!).subscribe(ok => {
    if (ok) {
      this.router.navigate(['dashboard']);
    } else {
      alert('Credenciales incorrectas');
    }
  });
}
}
