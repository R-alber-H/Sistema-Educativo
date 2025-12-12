import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { cursos } from '../../models/cursos';

@Injectable({
  providedIn: 'root',
})
export class CursosService {

  private http = inject(HttpClient);
  private API_URL = 'http://melaproyectos.com:8085/api/cursos';
  private listaCursos$ = new BehaviorSubject<any[]>([]);
  cursos$ = this.listaCursos$.asObservable();

  obtenerCursos() {
  return this.http.get<any[]>(this.API_URL)
    .pipe(
      tap(cursos => this.listaCursos$.next(cursos)) 
    );
}

  crearCurso(curso:{ nombre: string }){
    return this.http.post(this.API_URL,curso)
    .pipe(
        tap(nuevoCurso => {
          this.listaCursos$.next([...this.listaCursos$.value, nuevoCurso]);
        })
      );
  }

  eliminarCurso(id:number){
    return this.http.delete(`${this.API_URL}/${id}`)
    .pipe(
      tap(curso =>{
        const listaActual = this.listaCursos$.value;
        const nuevaLista = listaActual.filter(curso => curso.id !== id);
        this.listaCursos$.next(nuevaLista);
      })
    )
  }

  obtenerMisCursos() {
  return this.http.get<any[]>(`${this.API_URL}/me`)
    .pipe(
      tap(cursos => this.listaCursos$.next(cursos))
    );
}

  
}
