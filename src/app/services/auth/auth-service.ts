
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';

export interface UsuarioLogueado {
  name: string;
  correo: string;
  rol: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuarioActual$ = new BehaviorSubject<UsuarioLogueado | null>(null);
  private http = inject(HttpClient);

  private API_URL = 'http://melaproyectos.com:8085/auth/login';

  constructor() {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      this.usuarioActual$.next(JSON.parse(usuario));
    }
  }

  // -------------------------------------------------------------
  // decodificar el token
  private decodeToken(token: string): any | null {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch {
      return null;
    }
  }
  // -------------------------------------------------------------

  login(correo: string, password: string) {
    return this.http.post<any>(this.API_URL, { correo, password }).pipe(
      map((res: any) => {
        const token = res?.token;
        if (!token) throw new Error('Token no recibido');

        localStorage.setItem('token', token);

        const payload = this.decodeToken(token);

        const usuario = {
          name: payload.sub,
          correo: payload.sub,
         rol: payload.roles[0].authority.replace('ROLE_', '')
        };

        this.usuarioActual$.next(usuario);
        localStorage.setItem('usuario', JSON.stringify(usuario));

        return true;
      }),
      catchError((err) => {
        console.error('Error en login:', err);
        return of(false);
      })
    );
  }

  logout() {
    this.usuarioActual$.next(null);
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
  }
}
