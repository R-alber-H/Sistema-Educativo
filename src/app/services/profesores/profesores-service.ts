import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfesoresService {

  private http = inject(HttpClient);
  private API_URL = 'http://melaproyectos.com:8085/api/cursos';

  obtenerProfesores() {
    return this.http.get(`${this.API_URL}`);
  }

}
