import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class EstudianteService {

  private http = inject(HttpClient);
  private API_URL = 'http://melaproyectos.com:8085/api/usuarios?rol=ESTUDIANTE';
  private listaEstudiantes$ = new BehaviorSubject<any[]>([]);
  estudiantes$ = this.listaEstudiantes$.asObservable();

  obtenerEstudiantes(){
    return this.http.get<any[]>(this.API_URL)
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
}

