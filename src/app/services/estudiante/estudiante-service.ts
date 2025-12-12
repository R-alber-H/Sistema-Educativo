import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class EstudianteService {

  private http = inject(HttpClient);
  private API_URL = 'http://melaproyectos.com:8085/api/usuarios';
  private listaEstudiantes$ = new BehaviorSubject<any[]>([]);
  estudiantes$ = this.listaEstudiantes$.asObservable();

  obtenerEstudiantes(){
    return this.http.get<any[]>(`${this.API_URL}?rol=ESTUDIANTE`)
    .pipe(
      tap(estudiantes => this.listaEstudiantes$.next(estudiantes)) 
    );
  }

  crearEstudiante(estudiante:any){
    return this.http.post(this.API_URL,estudiante)
    .pipe(
            tap(nuevoEstudiante => {
              this.listaEstudiantes$.next([...this.listaEstudiantes$.value, nuevoEstudiante]);
            })
          );
  }

  editarDatos(id: number, datos: any) {
    return this.http.put(`${this.API_URL}/${id}`, datos)
      .pipe(
        tap(actualizadoEstudiante => {
          const listaActual = this.listaEstudiantes$.value;
          const index = listaActual.findIndex(p => p.id === id);
          listaActual[index] = actualizadoEstudiante;
          this.listaEstudiantes$.next([...listaActual]);
        })
      );
  }

  eliminarEstudiante(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`)
      .pipe(
        tap(() => {
          const listaActual = this.listaEstudiantes$.value.filter(e => e.id !== id);
          this.listaEstudiantes$.next(listaActual);
        })
      );
  }
}

