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
    return this.http.get<any[]>(`${this.API_URL}?rol=PROFESOR`)
      .pipe(
        tap(profesores => this.listaProfesores$.next(profesores))
      );
  }

  crearProfesor(profesor: any) {
    return this.http.post(this.API_URL, profesor)
      .pipe(
        tap(nuevoProfesor => {
          this.listaProfesores$.next([...this.listaProfesores$.value, nuevoProfesor]);
        })
      );
  }
  
  editarDatos(id: number, datos: any) {
    return this.http.put(`${this.API_URL}/${id}`, datos)
      .pipe(
        tap(actualizadoProfesor => {
          const listaActual = this.listaProfesores$.value;
          const index = listaActual.findIndex(p => p.id === id);
          listaActual[index] = actualizadoProfesor;
          this.listaProfesores$.next([...listaActual]);
        })
      );
  }

  eliminarProfesor(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`)
      .pipe(
        tap(() => {
          const listaActual = this.listaProfesores$.value.filter(p => p.id !== id);
          this.listaProfesores$.next(listaActual);
        })
      );
  }
}
