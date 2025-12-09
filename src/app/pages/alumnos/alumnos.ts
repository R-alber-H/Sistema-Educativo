import { Component,ViewChild } from '@angular/core';
import { AlumnosRegistrados } from '../../datosSimulados/alumnos';
import { ModalRegistrarEstudiante } from "../../components/modal-registrar-estudiante/modal-registrar-estudiante";
import { ModalEditarEstudiante } from "../../components/modal-editar-estudiante/modal-editar-estudiante/modal-editar-estudiante";

@Component({
  selector: 'app-alumnos',
  standalone:true,
  imports: [ModalRegistrarEstudiante, ModalEditarEstudiante],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css',
})
export class Alumnos {
  alumnosRegistrados = AlumnosRegistrados;

   @ViewChild(ModalRegistrarEstudiante) modalRegistro!: ModalRegistrarEstudiante;
   @ViewChild(ModalEditarEstudiante) modalEdicion!: ModalEditarEstudiante;

   abrirModal(){
    this.modalRegistro.abrirModal();
   }
   abrirModalEdicion(estudiante:any){
    this.modalEdicion.abrirModal(estudiante);
   }
}
