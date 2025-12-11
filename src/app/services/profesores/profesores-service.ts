import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfesoresService {

  private http = inject(HttpClient);
  private API_URL = 'http://melaproyectos.com:8085/api/usuarios';
  private listaProfesores$ = new BehaviorSubject<any[]>([]);
    profesores$ = this.listaProfesores$.asObservable();

  obtenerProfesores() {
    return this.http.get(`${this.API_URL}`);
  }

  crearProfesor(profesor:any){
    return this.http.post(this.API_URL,profesor)
    .pipe(
            tap(nuevoCurso => {
              this.listaProfesores$.next([...this.listaProfesores$.value, nuevoCurso]);
            })
          );
  }
}
