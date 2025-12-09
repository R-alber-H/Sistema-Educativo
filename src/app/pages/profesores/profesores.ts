import { Component, ViewChild } from '@angular/core';
import { ProfesoresRegistrados } from '../../datosSimulados/profesores';
import { ModalRegistrarProfesor } from "../../components/modal-registrar-profesor/modal-registrar-profesor";
import { ModalEditarProfesor } from "../../components/modal-editar-profesor/modal-editar-profesor/modal-editar-profesor";

@Component({
  selector: 'app-profesores',
  imports: [ModalRegistrarProfesor, ModalEditarProfesor],
  templateUrl: './profesores.html',
  styleUrl: './profesores.css',
})
export class Profesores {

  profesoresRegistrados = ProfesoresRegistrados;

   @ViewChild(ModalRegistrarProfesor) modalRegistro!: ModalRegistrarProfesor;
   @ViewChild(ModalEditarProfesor) modalEdicion!: ModalEditarProfesor;

   abrirModal(){
    this.modalRegistro.abrirModal();
   }

   abrirModalEdicion(profesor:any){
    this.modalEdicion.abrirModal(profesor);
   }
}
