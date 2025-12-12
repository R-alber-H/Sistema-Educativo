import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClasesService {

  private http = inject(HttpClient);
  private API_URL = 'http://melaproyectos.com:8085/api/clases';
  private listaClases$ = new BehaviorSubject<any[]>([]);
  clases$ = this.listaClases$.asObservable();

  obtenerClases() {
    return this.http.get<any[]>(this.API_URL)
      .pipe(
        tap(clases => this.listaClases$.next(clases)) 
      );
  }
  
}
