import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ModalRegistrarCurso } from '../../components/modal-registrar-curso/modal-registrar-curso';
import { CursosService } from '../../services/cursos/cursos-service';
import { AuthService } from '../../services/auth/auth-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cursos',
  imports: [ModalRegistrarCurso,AsyncPipe],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css',
})
export class Cursos implements OnInit {

  @ViewChild(ModalRegistrarCurso) modalRegistro!: ModalRegistrarCurso;
  private cursoService = inject(CursosService)
  auth =inject(AuthService);

  usuario$ = this.auth.usuarioActual$;
  cursos: any[] = [];

  ngOnInit() {
    this.cursoService.cursos$.subscribe(c => this.cursos = c);
    this.cursoService.obtenerCursos().subscribe({
      next: (data: any) => {
        console.log('Cursos desde backend:', data);
        this.cursos = data;
      },

      error: (err) => console.error('Error al traer cursos:', err)
    });
  }

  abrirModal() {
    this.modalRegistro.abrirModal();
  }

  eliminar(id: number) {
  this.cursoService.eliminarCurso(id).subscribe({
    next: () => console.log('Curso eliminado'),
    error: (err) => console.error('Error al eliminar', err)
  });
}

}
