import { Component,ViewChild } from '@angular/core';
import { ModalRegistrarCurso } from '../../components/modal-registrar-curso/modal-registrar-curso';

@Component({
  selector: 'app-cursos',
  imports: [ModalRegistrarCurso],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css',
})
export class Cursos {

  @ViewChild(ModalRegistrarCurso) modalRegistro!: ModalRegistrarCurso;

abrirModal(){
    this.modalRegistro.abrirModal();
   }
}
