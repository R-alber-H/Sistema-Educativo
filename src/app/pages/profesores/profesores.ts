import { Component, ViewChild } from '@angular/core';
import { ProfesoresRegistrados } from '../../datosSimulados/profesores';
import { ModalRegistrarProfesor } from "../../components/modal-registrar-profesor/modal-registrar-profesor";

@Component({
  selector: 'app-profesores',
  imports: [ModalRegistrarProfesor],
  templateUrl: './profesores.html',
  styleUrl: './profesores.css',
})
export class Profesores {

  profesoresRegistrados = ProfesoresRegistrados;

   @ViewChild(ModalRegistrarProfesor) modalRegistro!: ModalRegistrarProfesor;

   abrirModal(){
    this.modalRegistro.abrirModal();
   }
}
