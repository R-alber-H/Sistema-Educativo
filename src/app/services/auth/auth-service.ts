import { Injectable } from '@angular/core';
import {  Usuarios,UsuarioLogueadao} from '../../datosSimulados/usuarios';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  usuarios = Usuarios;
  usuarioActual$ = new BehaviorSubject<UsuarioLogueadao | null>(null);

  constructor() {
  const usuario = localStorage.getItem('usuario');
  if (usuario) {
    this.usuarioActual$.next(JSON.parse(usuario));
  }
}

  login(email: string, password: string) {
    const usuarioEncontrado = this.usuarios.find(
      user => user.email === email && user.password === password
    );
    if (!usuarioEncontrado) return false;

    const usuario = {
      name: usuarioEncontrado.name,
      email: usuarioEncontrado.email,
      rol: usuarioEncontrado.rol,
    };

    this.usuarioActual$.next(usuario);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    return true ;
  }

  logout(){
    this.usuarioActual$.next(null);
    localStorage.removeItem('usuario');
  }
}
